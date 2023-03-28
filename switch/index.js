


document.getElementById("myButton").onclick = function () {
    var days =0;
    var day,month;

    month = Number(document.getElementById("month").value);
    day = Number(document.getElementById("day").value);

    switch(month){
        case 12:
            days+=30;
        case 11:
            days+=31;
        case 10:
            days+=30;
        case 9:
            days+=31;
        case 8:
            days+=31;
        case 7:
            days+=30;
        case 6:
            days+=31;
        case 5:
            days+=30;
        case 4:
            days+=31;
        case 3:
            days+=28;
        case 2:
            days+=31;
        case 1:
            days+=0;
    }

    days+=day;
    document.getElementById("days").value = days;
    console.log(days);
  }