# Hello this is my Counter

hi this is my program with javascript, I made a counter with three buttons  
and a div with put the number that will change depending on whether you  
click +1, -1 or reset. In addition, I decided to insert a clock that indicates  
the date that has been set on the computer 

---
### The clock 

This is the setup in html of my clock

```html
<div class="ore">
        <span class="hour" id="hour">00</span>
        <span class="dots">:</span>
        <span class="minutes" id="minutes">00</span>
        <span class="dots">:</span>
        <span class="seconds" id="seconds">00</span>
    </div>
```

and this is the javascript code which allows us to have the correct time 


I initialized this function by setting the hours, minutes and seconds with those of the pc
 ```javascript
function showTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
```
later I changed the default values ​​that I entered with html with those that I entered with javascript through the previous function

```javascript
document.getElementById("hour").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}

setInterval(showTime,10);
```

---

### The counter

This is the setup in Html of my counter

```html
<div class="container">
        <div class="box">
        <div id="result">0</div>
        <div class="buttons">
            <button id="less">-1</button>
            <button id="reset">reset</button>
            <button id="plus">+1</button>
        </div>
    </div>
    </div>

```


initially I created some variables that lock the buttons and another counter variable which will be by default= 0 ù

```javascript
let buttonPlus = document.querySelector("plus");
let buttonReset = document.querySelector("reset");
let buttonLess = document.querySelector("less");
var counter = 0;
```

then I created the first function one for each button

1. the first function is for the +1 button which, when clicked, increases the counter by one and replaces the result of the div which was 0 by default

```javascript
plus.onclick = function(){
counter++;
document.getElementById("result").innerHTML=counter;
} 
```

2. the second works takes care of the -1 itself it is very similar to the first but in addition  
I add an if(counter>=0) so the result can never go below zero and if by chance you click the -1  
in that case an alert will pop up saying that it can't be done 

```javascript
less.onclick = function(){
if(counter!=0){
counter--;
}else{
alert("non puoi scendere sotto lo 0");
}
document.getElementById("result").innerHTML=counter;
}
```

3. third and last function takes care of the reset so simply click the counter will be set  
to zero then I added an if which says that if the number is already zero there is no need to click 

```javascript
reset.onclick = function(){
if (counter!=0) {
counter=0;
} else {
alert("sei gia a zero");
}
document.getElementById("result").innerHTML=counter;
}
```

![foto](/Progetto%20js/image/image.png)
This is the result!

if you want to try [click_here](http://127.0.0.1:5500/Progetto%20js/index.html)

