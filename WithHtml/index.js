// Mouse events
// element.addEventListener(type, function);

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "#00FF00";
div.style.width = "200px";
div.style.height = "200px";
/*
div.addEventListener("click", e =>{
    console.log(e);
    console.log("Clicked the mouse");
    div.style.backgroundColor = 'grey';
})
*/

div.addEventListener("mousedown", e =>{
    console.log(e);
    console.log("Holding the mouse down");
    div.style.backgroundColor = 'red';
})

div.addEventListener("mouseup", e =>{
    console.log(e);
    console.log("Let go of the mouse down");
    div.style.backgroundColor = 'green';
})

div.addEventListener("dblclick", e =>{
    console.log(e);
    console.log("Double Clicked the mouse");
    div.style.backgroundColor = 'purple';
})

div.addEventListener("contextmenu", e =>{
    console.log(e);
    console.log("You Opened the context Menu");
    // div.style.backgroundColor = 'grey';
})

/*
div.addEventListener("mouseover", e =>{
    console.log(e);
    console.log("You entered the box");
    div.style.backgroundColor = '#00ff';
})

div.addEventListener("mouseleave", e =>{
    console.log(e);
    console.log("You left the square");
    div.style.backgroundColor = '#00ff00';
})
*/

div.addEventListener("mousemove", e =>{
    console.log(e);
    console.log("You are within the box");
    div.style.backgroundColor = 'grey';
})