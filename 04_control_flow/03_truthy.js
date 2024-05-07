// const userEmail="h@hitesh.ai"
const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// falsy values: false,0,-0,BigInt 0n,"",null, undefined,NaN
//truthy values : "0",'false'," ",[],{},function(){}
// string ke andr kuch bhi ho considered as true


//always check array empty as : 
if (userEmail.length === 0) {
    console.log("Array is empty");
}


//to check object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//try in console
false==0 //true
false==""//true
0==""//true


//Nullish Coalescing Operator (??) : null undefined
//used when values come database may be null etc

let val1;
// val1=5 ?? 10 
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ??10 ??20

console.log(val1)


//ternary operator
// condition ? true : false 

const price=500
price>100 ? console.log("More than 100") : console.log("Less than 100")

