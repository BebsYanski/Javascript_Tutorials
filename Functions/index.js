let myName = "Bebs"

function sayHello(){
    // var myName = "Yannick";
    console.log("hello",myName);
};

function toCelsius(fahrenheit){
    console.log(typeof(fahrenheit));
    return (fahrenheit - 32)*(5/9);
}
function toFahrenheit(celsius){
    console.log(typeof(celsius));
    return (celsius * (9/5))+ 32;
}

sayHello();
console.log("Hello",myName);

document.getElementById("myButton").onclick = function(){
    var celsius = document.getElementById("myText").value;
    console.log(toCelsius(celsius));
    console.log(typeof(celsius));
}