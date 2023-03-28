/* Closure = A function with preserved data.
            Give you access to an outer function's scope, 
            from an inner function.
            
            State of variables in outer scope are "Saved".
            Variables in outer scope are considered "Private".
*/

let score = function(){
    let points = 0;

    return function(){
        points+=1;
        return points;
    };
}();

console.log(score());
console.log(score());
console.log(score());
