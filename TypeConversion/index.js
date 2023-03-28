// Type Conversion in js.
// There is explicit and implicit type conversion in js.

var age = window.prompt("What is your age?")

console.log("Happy birthday")

age = Number(age)
age = Boolean(age)
age = String(age)


age += 1;

console.log(age);
console.log(typeof(age));
