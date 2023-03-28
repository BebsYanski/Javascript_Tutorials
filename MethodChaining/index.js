// Method Chaining = Calling one method after another,
                // in one continuous line of code

// example: capitalization

let user = "yanski";

            // Normal Way
/* let firstLetter = user.charAt(0);
 firstLetter = firstLetter.toUpperCase();
 user = firstLetter + user.slice(1);*/

                // Method Chaining
user = user.charAt(0).toUpperCase() + user.slice(1);


console.log(user);