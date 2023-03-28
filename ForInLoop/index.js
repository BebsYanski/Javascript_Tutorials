// For in loop

let letters = ['H','E','L','P'];

let car = {
    make: "Chevy",
    model: "Corvette",
    year: 2021,
    color: "blue"
};

for (let i in letters) {
    console.log(letters[i]);
}

letters.forEach(element => {
    console.log(element);
});

for (let i in car) {
    console.log(car[i]);
}

console.log(letters);
console.log(car);