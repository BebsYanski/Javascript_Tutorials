// filter() = Returns the elements of an array
//              that meets a condition specified in a fxn
 
let students = [16, 17, 18, 19, 20];

function checkAge(age){
    if(age >= 18){
        return age;
    }
}

let notAdult = students.filter(item => item < 18)

let adultStudents = students.filter(checkAge);

console.log(adultStudents);
console.log(notAdult);