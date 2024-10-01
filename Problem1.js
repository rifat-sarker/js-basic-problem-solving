/**
 * higher order function, function expression
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    args = "Hello World";
    // console.log(args)
    return args;
  };
};
const f = createHelloWorld("jony");
f();

// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.

var num = function (a, b) {
  const sum = a + b;
  return sum;
};
const finalOuput = num(20, 15);
// console.log(finalOuput)

// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(20, 10);

// console.log(result)

// Functions Within Functions
// A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

function functionInsideFunction() {
  function number(a, b) {
    const sum = a + b;
    return sum;
  }
  return number;
}

const total = functionInsideFunction();
// console.log(total(4,44))

// Function Hoisting
// JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax.

function hoistingFunction() {
  return num;
  function num(a, b) {
    const sum = a + b;
    return sum;
  }
}

const final = hoistingFunction();
// console.log(final(44,2))

// x = 5;
// console.log(x);
// var x; // output: 5, no error

function outerFunction() {
  let outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Hello

function closuresFunction(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}

const resultClosure = closuresFunction(10);
console.log(resultClosure(3)); //13

// Arrow Syntax
// The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax

const arrowFunction = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(arrowFunction(3, 4)); // 7






// Omit Return
// If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

const f1 = (a, b) => a + b;
// console.log(f1(3, 4)); // 7





// Rest Arguments
// You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems.


function f5(...args) {
    const sum = args[0] + args[1];
    return sum;
}
// console.log(f5(3, 4)); // 7



function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f3 = log((a, b) => a + b);
f3(1, 2); // Logs: Input [1, 2] Output 3