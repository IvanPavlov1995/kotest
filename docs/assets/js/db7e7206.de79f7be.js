"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3192],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=s,m=u["".concat(o,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"styles",title:"Testing Styles",slug:"testing-styles.html"},o=void 0,p={unversionedId:"framework/styles",id:"framework/styles",title:"Testing Styles",description:"Kotest offers 10 different styles of test layout. Some are inspired from other popular test frameworks to make you feel right at home.",source:"@site/docs/framework/styles.md",sourceDirName:"framework",slug:"/framework/testing-styles.html",permalink:"/docs/next/framework/testing-styles.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/styles.md",tags:[],version:"current",frontMatter:{id:"styles",title:"Testing Styles",slug:"testing-styles.html"},sidebar:"framework",previous:{title:"Writing Tests",permalink:"/docs/next/framework/writing-tests.html"},next:{title:"Enabled Flags",permalink:"/docs/next/framework/conditional/enabled-config-flag.html"}},d={},c=[{value:"Fun Spec",id:"fun-spec",level:2},{value:"String Spec",id:"string-spec",level:2},{value:"Should Spec",id:"should-spec",level:2},{value:"Describe Spec",id:"describe-spec",level:2},{value:"Behavior Spec",id:"behavior-spec",level:2},{value:"Word Spec",id:"word-spec",level:2},{value:"Free Spec",id:"free-spec",level:2},{value:"Feature Spec",id:"feature-spec",level:2},{value:"Expect Spec",id:"expect-spec",level:2},{value:"Annotation Spec",id:"annotation-spec",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest offers 10 different styles of test layout. Some are inspired from other popular test frameworks to make you feel right at home.\nOthers were created just for Kotest."),(0,r.kt)("p",null,"To use Kotest, create a class file that extends one of the test styles. Then inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"init { }")," block,\ncreate your test cases. The following table contains the test styles you can pick from along with examples."),(0,r.kt)("p",null,"There are no functional differences between the styles.\nAll allow the same types of configuration ","\u2014"," threads, tags, etc ","\u2014","\nit is simply a matter of preference how you structure your tests."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test Style"),(0,r.kt)("th",{parentName:"tr",align:null},"Inspired By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#fun-spec"},"Fun Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#describe-spec"},"Describe Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"Javascript frameworks and RSpec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#should-spec"},"Should Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#string-spec"},"String Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#behavior-spec"},"Behavior Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"BDD frameworks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#free-spec"},"Free Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#word-spec"},"Word Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#feature-spec"},"Feature Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"Cucumber")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#expect-spec"},"Expect Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#annotation-spec"},"Annotation Spec")),(0,r.kt)("td",{parentName:"tr",align:null},"JUnit")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some teams prefer to mandate usage of a single style, others mix and match. There is no right or wrong - do whatever feels right for your team."))),(0,r.kt)("h2",{id:"fun-spec"},"Fun Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FunSpec")," allows you to create tests by invoking a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," with a string argument to describe the test,\nand then the test itself as a lambda. If in doubt, this is the style to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FunSpec({\n    test("String length should return the length of the string") {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xtest")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FunSpec({\n    context("this outer block is enabled") {\n        xtest("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        test("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"string-spec"},"String Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StringSpec")," reduces the syntax to the absolute minimum.\nJust write a string followed by a lambda expression with your test code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n    "strings.length should return size of string" {\n        "hello".length shouldBe 5\n    }\n})\n')),(0,r.kt)("p",null,"Adding config to the test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n    "strings.length should return size of string".config(enabled = false, invocations = 3) {\n        "hello".length shouldBe 5\n    }\n})\n')),(0,r.kt)("h2",{id:"should-spec"},"Should Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," is similar to fun spec, but uses the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"should")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    should("return the length of the string") {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be nested in one or more context blocks as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    context("String.length") {\n        should("return the length of the string") {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xshould")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    context("this outer block is enabled") {\n        xshould("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        should("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"describe-spec"},"Describe Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DescribeSpec")," offers a style familiar to those from a Ruby or Javascript background, as this testing style\nuses ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," keywords. Tests must be nested in one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," blocks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : DescribeSpec({\n    describe("score") {\n        it("start as zero") {\n            // test here\n        }\n        describe("with a strike") {\n            it("adds ten") {\n                // test here\n            }\n            it("carries strike to the next frame") {\n                // test here\n            }\n        }\n\n        describe("for the opposite team") {\n            it("Should negate one score") {\n                // test here\n            }\n        }\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xdescribe")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xit")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : DescribeSpec({\n    describe("this outer block is enabled") {\n        xit("this test is disabled") {\n            // test here\n        }\n    }\n    xdescribe("this block is disabled") {\n        it("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"behavior-spec"},"Behavior Spec"),(0,r.kt)("p",null,"Popular with people who like to write tests in the ",(0,r.kt)("em",{parentName:"p"},"BDD")," style, ",(0,r.kt)("inlineCode",{parentName:"p"},"BehaviorSpec")," allows you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"given"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"when"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"then"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    given("a broomstick") {\n        `when`("I sit on it") {\n            then("I should be able to fly") {\n                // test code\n            }\n        }\n        `when`("I throw it away") {\n            then("it should come back") {\n                // test code\n            }\n        }\n    }\n})\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," is a keyword in Kotlin, we must enclose it with backticks. Alternatively, there are title case versions available if you don't like the use of backticks, eg, ",(0,r.kt)("inlineCode",{parentName:"p"},"Given"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"When"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Then"),"."))),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"And")," keyword in ",(0,r.kt)("inlineCode",{parentName:"p"},"Given")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"When")," to add an extra depth to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    given("a broomstick") {\n        and("a witch") {\n            `when`("The witch sits on it") {\n                and("she laughs hysterically") {\n                    then("She should be able to fly") {\n                        // test code\n                    }\n                }\n            }\n        }\n    }\n})\n')),(0,r.kt)("p",null,"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Then")," scope doesn't have an ",(0,r.kt)("inlineCode",{parentName:"p"},"and")," scope due to a Gradle bug. For more information, see #594"),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xgiven"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xwhen"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"xthen")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    xgiven("this is disabled") {\n        When("disabled by inheritance from the parent") {\n            then("disabled by inheritance from its grandparent") {\n                // disabled test\n            }\n        }\n    }\n    given("this is active") {\n        When("this is active too") {\n            xthen("this is disabled") {\n               // disabled test\n            }\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"word-spec"},"Word Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WordSpec")," uses the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"should")," and uses that to nest tests after a context string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : WordSpec({\n    "String.length" should {\n        "return the length of the string" {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n})\n')),(0,r.kt)("p",null,"It also supports the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"When")," allowing to add another level of nesting. Note, since ",(0,r.kt)("inlineCode",{parentName:"p"},"when")," is a keyword\nin Kotlin, we must use backticks or the uppercase variant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : WordSpec({\n    "Hello" When {\n        "asked for length" should {\n            "return 5" {\n                "Hello".length shouldBe 5\n            }\n        }\n        "appended to Bob" should {\n            "return Hello Bob" {\n                "Hello " + "Bob" shouldBe "Hello Bob"\n            }\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"free-spec"},"Free Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FreeSpec")," allows you to nest arbitrary levels of depth using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," (minus) for outer tests, and just the test name for the final test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FreeSpec({\n    "String.length" - {\n        "should return the length of the string" {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n    "containers can be nested as deep as you want" - {\n        "and so we nest another container" - {\n            "yet another container" - {\n                "finally a real test" {\n                    1 + 1 shouldBe 2\n                }\n            }\n        }\n    }\n})\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The innermost test must not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," (minus) keyword after the test name."))),(0,r.kt)("h2",{id:"feature-spec"},"Feature Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FeatureSpec")," allows you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scenario"),", which will be familiar to those who have used ",(0,r.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/"},"cucumber"),".\nAlthough not intended to be exactly the same as cucumber, the keywords mimic the style."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FeatureSpec({\n    feature("the can of coke") {\n        scenario("should be fizzy when I shake it") {\n            // test here\n        }\n        scenario("and should be tasty") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xfeature")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xscenario")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FeatureSpec({\n    feature("this outer block is enabled") {\n        xscenario("this test is disabled") {\n            // test here\n        }\n    }\n    xfeature("this block is disabled") {\n        scenario("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"expect-spec"},"Expect Spec"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExpectSpec")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"FunSpec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," but uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"expect")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    expect("my test") {\n        // test here\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be nested in one or more context blocks as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    context("a calculator") {\n        expect("simple addition") {\n            // test here\n        }\n        expect("integer overflow") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("p",null,"Tests can be disabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xexpect")," variants (in addition to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    context("this outer block is enabled") {\n        xexpect("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        expect("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,r.kt)("h2",{id:"annotation-spec"},"Annotation Spec"),(0,r.kt)("p",null,"If you are migrating from JUnit then ",(0,r.kt)("inlineCode",{parentName:"p"},"AnnotationSpec")," is a spec that uses annotations like JUnit 4/5.\nJust add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Test")," annotation to any function defined in the spec class."),(0,r.kt)("p",null,"You can also add annotations to execute something before tests/specs and after tests/specs, similarly to JUnit's"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@BeforeAll / @BeforeClass\n@BeforeEach / @Before\n@AfterAll / @AfterClass\n@AfterEach / @After\n")),(0,r.kt)("p",null,"If you want to ignore a test, use ",(0,r.kt)("inlineCode",{parentName:"p"},"@Ignore"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Although this spec doesn't offer much advantage over using JUnit, it allows you to migrate existing tests relatively easily, as you typically just need to adjust imports."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class AnnotationSpecExample : AnnotationSpec() {\n\n    @BeforeEach\n    fun beforeTest() {\n        println("Before each test")\n    }\n\n    @Test\n    fun test1() {\n        1 shouldBe 1\n    }\n\n    @Test\n    fun test2() {\n        3 shouldBe 3\n    }\n}\n')))}h.isMDXComponent=!0}}]);