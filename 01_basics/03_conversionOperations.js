/* ------------conversion to number --------------*/

let score=null  //try 33 , null ,undefined , true/false

console.log(typeof score);
console.log(typeof(score));


let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" =>  33
//"33abc" =>NaN
//true => 1; false =0
//null => 0


/* ------------conversion to boolean --------------*/
let isLoggedIn=3;  //true

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 =>false
// "" => false
// "nishu" => true


/* ------------conversion to string--------------*/
let someNumber=223

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



/*-------------------operations ----------------*/
let value=3
let negValue=-value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1="hello"
let str2="nilisha"

let str3=str1+str2
console.log(str3);

//some cases where output varies but no need to remember as these reduces redability of program and not prefered
console.log("1"+2);  //12
console.log(1+"2");  //12
console.log(1+2);    //3
console.log("2"+2+3); //223
console.log(2+3+"2");//52


//not preferred in productions as only create confusion and many people will need to read code

console.log(true);  //true
console.log(+true); //1 (as true is boolean so coneverted to 1)
// console.log(true+); //error
console.log(+"");  //0 (empty value to convert krne pr 0 aata h)

let num1,num2,num3
num1=num2=num3=2+2
console.table([num1,num2,num3]); //4 4 4

let gameCounter=100
gameCounter++;
console.log(gameCounter); //101


//study operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
