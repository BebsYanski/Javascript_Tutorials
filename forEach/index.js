// ForEach()

let total = 0;

let cart = [5,6,7,8,9];

// function checkOut(element){
//     total += element;
// }

// cart.forEach(checkOut);
cart.forEach(element => {
    total+=element;
});

console.log("Total: ",total);