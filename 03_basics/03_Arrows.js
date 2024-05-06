// current object/context(i.e inside { }) ko access krne ke liye use this keyword 
const user={
    username:"nilisha",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome Here`)
        console.log(this); // showing current context
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

// console.log(this); // give {} empty object in node environment but in browser it give window object

// <-----------------Reason line 16--------------->
// pehle javascript ko run krne ka ek hi tarika tha browser ke Andr , jo engine js ko run krta tha wah browser ke andr paya jata tha,but now we have these engines standalone eg node, bun etc
// toh browser ke andr jo object global run krta h wah h "Window object" due to which we are able to capture all window events eg. click etc


// function chai(){
//     // console.log(this);
// }
// chai()

// function tea(){
//     let username="nilisha"
//     console.log(this.username); //undefined : this context will run only inside objects eg user not in funtions
// }

// tea()

// <---------------various ways to declare functions---------------->
//1 : using function keyword
const chai1=function(){
    let username="nilisha"
    console.log(this);
}
chai1()

//2 : using arrow function
const chai2=()=>{
    let username="nilisha"
    console.log(this);//{}
}
chai2()

//read this to see difference in both above functions:https://chatgpt.com/c/c18b2150-a444-4479-9fbe-12cddb6deea2

// <----------------Arrow Functions------------------->
//explicit return
// const addTwo1=(num1,num2)=>{
//     return num1+num2;
// }

//implicit return : above func without return keyword
// const addTwo1=(num1,num2)=> num1+num2

//no need to use return keyword with () brackets but but neccesary with {}
const addTwo1=(num1,num2)=> (num1+num2)

console.log(addTwo1(3,4)); // 

//to return object
const add=(n1,n2)=>({username:"hitesh"})
console.log(add(2,3));