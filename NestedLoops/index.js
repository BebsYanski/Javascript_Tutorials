var sym = window.prompt("Enter a symbol to use");
var rows = window.prompt("Enter number of rows");
var columns = window.prompt("Enter number of columns");

for(let i=0;i<=rows;i++){
    for(let j =0;j<=columns;j++){
        document.getElementById("myRec").innerHTML += sym;
        
    }
    document.getElementById("myRec").innerHTML += "<br>";
}