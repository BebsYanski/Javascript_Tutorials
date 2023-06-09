// Function expression = A function can also be defined using an expression.
                        // Function expression can be stored in a variable.
                        // The variable can be used as a function.
                        // They can be invoked by adding ()

                        // 1. Useful as closures
                        // 2. Used in IIFE (funcs that runs as soon as it's defined)
                        // 3. Can be passed as arguments to other functions.

// Normal Function Declarations
/*
sayHello();

function sayHello() {
    console.log("Hello");
  }
  let greeting = "Hello";
  outputWebsite(greeting);

  function outputConsole(x){
    console.log(x);
  }

  function outputWebsite(x){
    document.getElementById("myH1").innerHTML = x;
  }
  */
//               Function Expression

// let greeting = function(){console.log("Hello");}
let greeting = function(){document.getElementById("myH1").innerHTML = "Hello";}


// greeting();
output(greeting);

function output(func){
    func();
}