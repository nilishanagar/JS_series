/*- -------------2 types -----------------
 1) Primitive Datatype : Pass by value
     String , Number , Boolean , null , undefined , BigInt,Symbol 

     return datatype of null is object

2) Reference (Non Primitive) datatype : Pass by reference or address
    -Objects
    -Functions
    -Arrays

    return type of reference datatype is function object
  */

const score=100
const scoreValue=1323.23

const isLoggedIn = false
const outsideTemp=null
let userEmail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);  //false

const bigNumber=87248724727829233n


// Array 
const arr=["nilisha",243,"kota"];
console.log(arr);

//Object
const myObj={
    name:"nilisha",
    rollno:213,
    city:"udaipur"
}

console.log(myObj);

//Function
const myFunction=function(){
    console.log("Hello Dosto");
}
myFunction();


/*-----------------Memory types and storage----------------*/
// Stack(Primitive) , Heap (Non-Primitives)

let myYouTubename = "EatAndBeat"

let anotherName=myYouTubename  //(Pass by copy)
anotherName="Let'sBreak"

console.log(anotherName);
console.log(myYouTubename);

let userOne={
    name:"nilisha",
    email:"nilisha@gmail.com",
    upi:"xyz@ybl"
}

let userTwo=userOne //Pass by reference

userTwo.email="abcd@mail.com"

console.log(userOne.email);
console.log(userTwo.email);