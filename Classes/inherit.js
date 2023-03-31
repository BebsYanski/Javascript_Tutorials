// Inheritance = useful for code reusability.

class animal{
    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("This animal is eating");
    }
}

class Rabbit extends animal{
    run(){
        console.log("THis rabbit is running");
    }
}
class Fish extends animal{
    swim(){
        console.log("This fish is swimming");
    }
}
class Hawk extends animal{
    fly(){
        console.log("THis hawk is flying");
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

fish.alive();