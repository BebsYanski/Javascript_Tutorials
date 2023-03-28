// Arrays are variables that can store more than one value.

var cars = ["Mustang","Corvette","Jaguar"];

console.log(cars[2]);
cars.push("Tesla");
console.log(cars);
cars.pop();
console.log(cars);
// cars.shift();
// cars.sort();
// cars.reverse();
console.log(cars);
console.log(cars[2]);
var numOfCars = cars.length;
console.log("Length of cars array is:",numOfCars);

var lastCar = cars[cars.length -1];


