/* Closure = A function with preserved data.
            Give you access to an outer function's scope, 
            from an inner function.
            
            State of variables in outer scope are "Saved".
            Variables in outer scope are considered "Private".
*/

function makeSize(size){

    return function(){
        document.body.style.fontSize = size + "px";
    };
}
function makeFont(font){

    return function(){
        document.body.style.fontFamily = font;
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");

size20();
size30();
size40();

fontInkFree();

