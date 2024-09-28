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

var num = function(a,b){
    const sum = a + b;
    return sum;
}
const finalOuput = num(20,15)
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

function functionInsideFunction (){
    function number (a, b) {
        const sum = a + b;
        return sum;
    }
    return number;
}

const total = functionInsideFunction();
// console.log(total(4,44))
