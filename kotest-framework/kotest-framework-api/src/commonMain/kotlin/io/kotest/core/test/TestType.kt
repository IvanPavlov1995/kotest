package io.kotest.core.test

import io.kotest.common.ExperimentalKotest

/**
 * Test's in Kotest are arranged in a tree with the "Engine" sitting at the root, and each
 * Spec sitting directly under the Engine.
 *
 * Tests then sit under each Spec. If a test is a leaf node and is not permitted to contain
 * other tests, then we say it has type "Test". If a test is a parent node and is permitted
 * to contain other nodes, then we say it is a "Container". If a test is
 */
enum class TestType {

   /**
    * A container that can contain other tests.
    * Used when a test has been defined programatically via the DSL.
    */
   Container,

   /**
    * A leaf test that cannot contain nested tests.
    * Used when a test has been defined programatically via the DSL.
    */
   Test,

   /**
    * Can either be a container or a test and is used when tests are
    * added dynamically via functionality such as property tests or data tests.
    */
   @ExperimentalKotest
   Dynamic,
}
