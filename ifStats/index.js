document.getElementById("myButton").onclick= function(){
    var age = document.getElementById("myText").value;

    if(age >= 18 && age < 65){
        console.log("Your age is",age+". You are an adult");
    }
    else if(age >= 65){
        console.log("Your age is",age+". You are a senior.");
    }
    else{
        console.log("Your age is",age+". You are a child!");
    }
}