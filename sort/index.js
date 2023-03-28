let num = [3,5,2,66,44,2,24];

// num.sort();//Sorted in ASCII Char order
// num.sort(function(x,y){
//    return x-y; //Ascending order, y-x: Descending order
// });

num.sort((x,y) => y-x);

console.log(num);