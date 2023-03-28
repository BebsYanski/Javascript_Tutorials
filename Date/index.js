date = new Date(0);//first date
date = new Date();//Current date
date = new Date(2022,3,4,18,34,45,6);//(year,month,day,hours,minutes,seconds,millisecs)
date = new Date("April 20, 2022 16:20:01:02");

let year = date.getFullYear();//setFullYear
let month = date.getMonth();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let millisecs = date.getMilliseconds();
let seconds = date.getSeconds();

console.log(date);
console.log(year);
console.log(month);
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(millisecs);