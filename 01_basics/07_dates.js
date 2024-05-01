// <------Date Object & its methods which have diff o/p------->

let myDate=new Date()
console.log(myDate); 
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//various formats of date
let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString()); //Mon Jan 23 2023 (month start from 0)

let mydate1=new Date(2023,0,23,5,3)
console.log(mydate1.toLocaleString());

let mydate2=new Date("2023-01-14") //YYYY-MM-DD format
console.log(mydate2.toLocaleString());


// <--------------Timestamp--------------->
//useful for comparison btw dates

let myTimeStamp=Date.now();

console.log(myTimeStamp); //give ans in millisecond from 1 jan 1970
console.log(Date.now()); //give in milliseconds
console.log(Math.floor(Date.now()/1000)); //small value easy for comparison


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()); //start from 0


// <----------important : toLocaleString()-------------->

// In JavaScript, toLocaleString() is a method that is available on objects such as numbers, dates, and arrays. It's used to convert the object to a string using the locale-specific formatting options.

const number = 1234567.89;
console.log(number.toLocaleString()); // Output will depend on the locale settings of your environment


console.log(number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })); // Output will be in USD currency format







