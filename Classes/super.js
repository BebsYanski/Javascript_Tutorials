class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log("Your name is",this.name);
        console.log("Your age is",this.age);
    }
}

class Student extends person{
    constructor(name, age, gpa){
        super(name,age);
        this.gpa = gpa;
    }
    hello(){
        super.welcome();
        console.log("Your gpa is",this.gpa);
    }
}
class Teacher extends person{
    constructor(name, age, classSize){
        super(name,age);
        this.classSize = classSize;
    }

    hello(){
        super.welcome();
        console.log("Your class size is",this.classSize);
    }
}

    let student = new Student("Steve",21,2.0);
    let teacher = new Teacher("Harris",21,550);

    console.log(student.name);