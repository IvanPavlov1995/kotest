package io.kotest.core.runtime

import io.kotest.mpp.log
import io.kotest.core.extensions.TestCaseExtension
import io.kotest.core.test.NestedTest
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestContext
import io.kotest.core.test.TestResult
import io.kotest.core.test.TestStatus
import io.kotest.core.test.TestType
import io.kotest.core.test.isActive
import io.kotest.core.test.resolvedTimeout
import io.kotest.fp.Try
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.coroutineScope
import kotlin.coroutines.CoroutineContext
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.TimeMark
import kotlin.time.TimeSource

interface TestExecutionListener {
   fun testStarted(testCase: TestCase) {}
   fun testIgnored(testCase: TestCase) {}
   fun testFinished(testCase: TestCase, result: TestResult) {}
}

@OptIn(ExperimentalTime::class)
data class TimeoutException constructor(val duration: Duration) :
   Exception("Test did not completed within ${duration.toLongMilliseconds()}ms")

/**
 * Executes a single [TestCase]. Uses a [TestExecutionListener] to notify callers of events in the test.
 *
 * The [TimeoutExecutionContext] is used to provide a way of executing functions on the underlying platform
 * in a way that best utilizes threads or the lack of on that platform.
 *
 * The [validateTestCase] function is invoked before a test is executed to ensure that the
 * test case is compatible on the actual platform. For example, in JS we can only support certain
 * spec styles due to limitations in the underlying test runners.
 *
 * If the given test case is invalid, then this method should throw an exception.
 */
@OptIn(ExperimentalTime::class)
class TestExecutor(
   private val listener: TestExecutionListener,
   private val executionContext: TimeoutExecutionContext,
   private val validateTestCase: (TestCase) -> Unit = {}
) {

   suspend fun execute(testCase: TestCase, context: TestContext): TestResult {
      validateTestCase(testCase)
      val mark = TimeSource.Monotonic.markNow()
      return intercept(testCase, context, mark, testCase.extensions()).apply {
         when (status) {
            TestStatus.Ignored -> listener.testIgnored(testCase)
            else -> listener.testFinished(testCase, this)
         }
      }
   }

   /**
    * Recursively runs the extensions until no extensions are left, at which point the test
    * is executed and the result returned.
    */
   private suspend fun intercept(
      testCase: TestCase,
      context: TestContext,
      mark: TimeMark,
      extensions: List<TestCaseExtension>
   ): TestResult {
      return when {
         extensions.isEmpty() -> executeIfActive(testCase) { executeActiveTest(testCase, context, mark) }
         else -> extensions.first().intercept(testCase) { intercept(it, context, mark, extensions.drop(1)) }
      }
   }

   /**
    * Checks the active status of a [TestCase] before invoking it.
    * If the test is inactive, then [TestResult.ignored] is returned.
    */
   private suspend fun executeIfActive(testCase: TestCase, ifActive: suspend () -> TestResult): TestResult {
      // if the test case is active we execute it, otherwise we just invoke the callback with ignored
      return when (testCase.isActive()) {
         true -> ifActive()
         false -> TestResult.Ignored
      }
   }

   /**
    * Executes a test taking care of invoking user level listeners.
    * The test is always marked as started at this stage.
    *
    * If the before-test listeners fail, then the test is not executed, but the after-test listeners
    * are executed, and the returned result contains the listener exception.
    *
    * If the test itself fails, then the after-test listeners are executed,
    * and the returned result is generated from the test exception.
    *
    * If the after-test listeners fail, then the returned result is taken from the listener exception
    * and any result from the test itself is ignored.
    *
    * Essentially, the after-test listeners are always attempted, and any error from invoking the before, test,
    * or after code is returned as higher priority than the result from the test case itself.
    */
   private suspend fun executeActiveTest(
      testCase: TestCase,
      context: TestContext,
      mark: TimeMark
   ): TestResult {

      log("Executing active test $testCase")
      listener.testStarted(testCase)

      return testCase.invokeBeforeTest()
         .flatMap { invokeTestCase(executionContext, it, context, mark) }
         .fold(
            {
               TestResult.throwable(it, mark.elapsedNow()).apply {
                  testCase.invokeAfterTest(this)
               }
            },
            { result ->
               testCase.invokeAfterTest(result)
                  .fold(
                     { TestResult.throwable(it, mark.elapsedNow()) },
                     { result }
                  )
            }
         )
   }

   /**
    * Invokes the given [TestCase] on the given executor.
    */
   private suspend fun invokeTestCase(
      ec: TimeoutExecutionContext,
      testCase: TestCase,
      context: TestContext,
      mark: TimeMark
   ): Try<TestResult> = Try {
      log("invokeTestCase $testCase")

      if (testCase.config.invocations > 1 && testCase.type == TestType.Container)
         error("Cannot execute multiple invocations in parent tests")

      // we calculate the timeout which will fail the test with a timed out message
      val timeout = testCase.config.resolvedTimeout()
      val t = executeAndWait(ec, testCase, context, timeout)

      val result = TestResult.throwable(t, mark.elapsedNow())
      log("Test completed with result $result")
      result
   }

   /**
    * Invokes the given [TestCase] handling timeouts.
    * We create a scope here so that our coroutine waits for any child coroutines created by user code.
    */
   private suspend fun executeAndWait(
      ec: TimeoutExecutionContext,
      testCase: TestCase,
      context: TestContext,
      timeout: Duration
   ): Throwable? = coroutineScope {
      try {
         // not all environments will support interrupting an execution with a timeout
         ec.executeWithTimeoutInterruption(timeout) {
            val contextp = object : TestContext() {
               override val testCase: TestCase = context.testCase
               override suspend fun registerTestCase(nested: NestedTest) = context.registerTestCase(nested)

               // must use the outer coroutine that will wait for child coroutines
               override val coroutineContext: CoroutineContext = this@coroutineScope.coroutineContext
            }
            replay(
               testCase.config.invocations,
               testCase.config.threads,
               { testCase.invokeBeforeInvocation(it) },
               { testCase.invokeAfterInvocation(it) }) {
               testCase.executeWithTimeout(contextp, timeout)
            }
         }
         null
      } catch (e: TimeoutCancellationException) {
         TimeoutException(timeout)
      } catch (t: Throwable) {
         t
      } catch (e: AssertionError) {
         e
      }
   }
}
