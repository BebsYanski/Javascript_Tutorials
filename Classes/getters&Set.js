let user = {
    firstName: "",
    lastName: "",
    set first(value){
        this.firstName = value.toUpperCase();
    },
    set last(value){
        this.lastName = value.toUpperCase();
    },
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
};
class User {
    
    constructor(first,last){
        this.first = first;
        this.last = last;
    }

    set first(value){
        this.firstName = value.toUpperCase();
    }
    set last(value){
        this.lastName = value.toUpperCase();
    }
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};


user.first ="Bebs";
user.last ="Yanski";

let users1 = new User("Bebs","yan");
let users2 = new User("Bebs","yanski");

console.log(users1.fullName);
console.log(users2.fullName);