
class Car {

    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("You are driving the ",this.model);
    }

    brake(){
        console.log("You step on the brakes of the ",this.model);
    }

    whatIsThis(){
        return this;
    }
}

let car1 = new Car("Ford", "Mustang",2022,"Red");
let car2 = new Car("Chevy","Corvette", 2021,"Blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car1.whatIsThis());