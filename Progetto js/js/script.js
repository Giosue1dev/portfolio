



let buttonPlus = document.querySelector("plus");
let buttonReset = document.querySelector("reset");
let buttonLess = document.querySelector("less");
var counter = 0;


plus.onclick = function(){
counter++;
document.getElementById("result").innerHTML=counter;
}

reset.onclick = function(){
if (counter!=0) {
counter=0;
} else {
alert("you are already at zero");
}
document.getElementById("result").innerHTML=counter;
}

less.onclick = function(){
if(counter!=0){
counter--;
}else{
alert("you can't go below 0");
}
document.getElementById("result").innerHTML=counter;
}

function showTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.getElementById("hour").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}

setInterval(showTime,10);
