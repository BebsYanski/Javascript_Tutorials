// Objects as arguments

class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
    }
}

function changeColor(car,newColor){
    car.color = newColor;
}

let car1 = new Car("Corvette","blue");
let car2 = new Car("Mustang","Black");
let x = "Yannick";
let y = "Yanski";

changeColor(car1,"purple");

console.log(x,y);
console.log(car1.model,car1.color);
console.log(car2.model,car2.color);