// Classes = blueprints for the creation of objects.

class Car{
    drive(){
        console.log("You drive the car");
    }
    brake(){
        console.log("You step on the brakes!");
    }
}

let car1 = new Car();
let car2 = new Car();


car1.drive();
car1.brake();