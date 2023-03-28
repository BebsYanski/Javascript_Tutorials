// objects are a container for properties/methods.

/*  Property = Values/variables that describe the state of the object.
    Methods = functions that describe what an object does.
*/

var human1 = {
    name: "Yan",
    age: 25,

    eat : function(){
        console.log("Yan is eating");
    },

    drink: function(){
        console.log("Yan is Drinking");
    },

    sleep: function(){
        console.log("Yan is dozing");
    }
};

var human2 = {
    name: "Bebs",
    age: 16,

    eat : function(){
        console.log("Bebs is eating");
    },

    drink: function(){
        console.log("Bebs is Drinking");
    },

    sleep: function(){
        console.log("Bebs is dozing");
    }
};

// human.name; - Dot notation
// human['name'] - bracket Notation
console.log(human1.name);
console.log(human1.age);
human1.eat();
human1.sleep();

console.log(human2.name);
console.log(human2.age);
human2.eat();
human2.sleep();