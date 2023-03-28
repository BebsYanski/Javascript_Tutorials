// Arrow Fxns =>
//Shortcut for a function expression

let hello;
let good;
let x = "Yo";
let y = "Yanski";

// function expression
/*hello = function(){
   return "Hello World";
}
console.log(hello());;*/

// arrow Func

hello = () => "Hello World";

hello = (x) => x+" Guys";

good = (x,y) => {
   console.log(x);
   console.log(y);
}
console.log(hello());
console.log(hello(x));
good(x,y);
