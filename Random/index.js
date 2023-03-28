var randNum;

// randNum = Math.random();//0 - 1
// randNum = Math.floor(Math.random()*6);// 0 - 5
// randNum = Math.floor(Math.random()*6)+1;// 1 - 6

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max - min) + min);
}


console.log(getRandomNum(3,10));