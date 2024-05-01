const score=400
console.log(score); // 400(primitive type)
console.log(typeof score);

//< --------------various methods available on number object --------------

const balance=new Number(100)
console.log(typeof balance);
console.log(balance);  //[Number:100] (reference /object type)

console.log(balance.toString()); //balance converted to string
console.log(balance.toFixed(2)); //100.00 ()=>no. of decimal digits want

const otherNumber=123.8966

console.log(otherNumber.toPrecision(3)); //124 give precision upto 3 values

const hundreds=1000000
console.log(hundreds.toLocaleString());  // 1,000,000 :bydefault USA
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 : indian

//various other methods on number object are : MIN_VALUE,isInteger etc


// <---------------Math Object---------------------->
console.log(Math); //have many properties/methods on inspect as object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.22));//4
console.log(Math.ceil(4.2)); //5 
console.log(Math.floor(4.2)); //2
console.log(Math.min(4,2,45,46));  //2
console.log(Math.max(4,3,24,54)); //54

console.log(Math.random()); //value btw 0 & 1
console.log(Math.random()*10); //value btw 1 & 10
console.log((Math.random()*10)+1); //to avoid 0 


const min=10;
const max=20;
console.log(Math.random()*(max-min+1)); //give value btw 1 to 10;
console.log(Math.floor(Math.random()*(max-min+1)) + min) ;// btw 10 to 20







