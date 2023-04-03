// Template Literals = Another way of formatting output,
// can contain placeholders for formatting and inserting:
// strings/values/variables/etc.

// - backticks
// ${}placeholder

// Can use multiple lines embed expressions.

let firstName = "Yan";
let lastName = "Beb";
let price = 10;
let taxRate = 0.05;
let total;

console.log(`Hello guys, I am ${firstName} 
${lastName}`);
console.log(`The price is: $${price}`);
console.log(`Tax Rate is: ${taxRate}`);
console.log(`Tax is: $${price * taxRate}`);
console.log(`Total is: $${total = price + (price * taxRate)}`);