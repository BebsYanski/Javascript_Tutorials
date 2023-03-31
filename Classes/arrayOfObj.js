class Car{
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
}

let garage = [];

let car1 = new Car("Corvette","blue");
let car2 = new Car("Mustang","black");
let car3 = new Car("Lambo","red");

garage = [car1,car2,car3];

console.log(garage[0]);
console.log(garage[1]);
console.log(garage[2]);