# Hello this is my Counter

hi this is my program with javascript, I made a counter with three buttons  
and a div with put the number that will change depending on whether you  
click +1, -1 or reset. In addition, I decided to insert a clock that indicates  
the date that has been set on the computer 

---
#`## The clock 

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
    
 
   ```javascript
    document.getElementById("hour").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}

setInterval(showTime,10);
````

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
and this is the javascript code