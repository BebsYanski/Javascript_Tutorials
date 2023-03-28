// Reduce() = Reduces an array to a single value
            // The return value of the callback
            // function is the accumulated result,
            // and is provided as an argument in 
            // the next call to the callback fxn.

let letters = ['H','E','L','P'];

function combineLetters(total, nextLetter, index, array) {
return total + nextLetter;
}

let newWord = letters.reduce((previous, current) => previous + current)

let word = letters.reduce(combineLetters);
let reverseWord = letters.reduceRight(combineLetters);

console.log(word);
console.log(reverseWord);
console.log(newWord);