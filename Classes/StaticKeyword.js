// Static = a method or property that belongs to 
            // a class and not any one of its objects.

class Car {
    static numberOfCars = 0;
    constructor(model){
        this.model = this.model;
        Car.numberOfCars += 1;
    }

    static beginRace(){
        console.log("THe race has begun");
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");

console.log(Car.numberOfCars);
Car.beginRace();