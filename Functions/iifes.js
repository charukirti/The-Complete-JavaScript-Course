"use strict";

"sometimes we need a func which only executes once and then never again. so the function disappears right once after the call";

const runOnce = function () {
  console.log("this will run only again");
};

runOnce();

(function () {
  console.log("This is the IIFE");
})();

// with arrow functions

(() => {
  console.log("IIFE with arrows");
})();

((a, b, c) => console.log(a + b + c))(1, 2, 3);


