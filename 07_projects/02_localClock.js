/*--------------------------imp points------------------
1) you can use the toLocaleTimeString() method of the Date object to get the local time in a specific format. This method automatically adjusts the time to the user's local time zone and returns it as a string in a format that depends on the locale.

2) jitni bar hm page refresh krenge , utni baar time aa jayega , lekin we want ki wah har baar crun ho and update ho without refreshing.

3) setInterval() is a JavaScript method used to repeatedly execute a function or code snippet at specified intervals. Here's the syntax:

    setInterval(function, interval);

-function: The function to be executed repeatedly.
-interval: The time interval (in milliseconds) at which the function should be executed.

4) setInterval(function{}, 1000) sets up an interval that calls the function every second (1000 milliseconds), continuously updating the displayed time in real-time.
*/


const clk=document.getElementById('clock');

setInterval(function(){
  let date=new Date();
  clk.innerHTML=date.toLocaleTimeString();
},1000);

