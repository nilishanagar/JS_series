console.log(2>1);  //true
console.log(2>=1); //true
console.log(2<1);  //false
console.log(2==1); //false
console.log(2!=1); //true


// these types of comparisons doesn't give predictable results, so compare btw same data types
console.log("2">1);  //true
console.log("02">1); //true


/* reason : equality check == and comparisons > < >= <= work differently.
comparisons convert null to a number, treating it as 0.
That's why line 19 give true and 18 give false */
console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); //true


console.log(undefined==0); //false
console.log(undefined>0);  //false
console.log(undefined<0);  //false


//  '===' => strict equality check datatype & value
console.log("2"===2); //false 