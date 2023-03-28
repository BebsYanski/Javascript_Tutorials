var myName = "Bebongnchu Yannick Nkwetta";
var myStreet = "Campaign Street";
var myCity = "Buea";
var address = "+237(680-062-425)"

console.log(myName.length);
console.log(myName.charAt(6));
console.log(myName.indexOf('k'));
console.log(myName.lastIndexOf('a'));
console.log(myName.trim());
console.log(myName.toUpperCase(6));
console.log(myName.toLowerCase(6));

console.log(myName.slice(0,myName.indexOf(' ')));//first Name
console.log(myName.slice(myName.lastIndexOf(' ') + 1));//lastName
console.log(myStreet.concat("\n",myCity));
console.log(address.replaceAll("-",''));