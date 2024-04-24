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
