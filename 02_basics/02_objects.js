//singleton : jab bhi constructor se object bnate h toh ek hi object bnta hai
//literals : object formed using literals have many instances

// <-----------------objects--------------->
//2 ways to declare  objects : a) using constructor :Object.create() b) using object literals

//object literals
const mySym=Symbol("key1");

const JsUser={ //bydefalut it key is consider as string
    name:"nilisha",
    age:18,
    [mySym]:"chaabi",
    "location" :"jaipur",
    "full name":"nilisha dhakad",
    email:"nilisha@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.name);
// console.log(JsUser[location]); //give error as location is string 
console.log(JsUser["location"]);
console.log(JsUser["full name"]);

// interview :Q1) [ek symbol ko input lo , usko object ki keys me add kro & print kro ]
// console.log(JsUser.mySym);  
// console.log(typeof JsUser.mySym); //if not written as[mySym] in dec,give string

console.log(JsUser[mySym]);//no need to "" as it is symbol & written as [mySym] in dec
console.log(typeof JsUser.mySym);//undefined


//  <---------------------------------------------------------ans1)------------------------------------------------------------ When you use dot notation (JsUser.mySym), JavaScript doesn't recognize it as a Symbol property, hence typeof returns "undefined". When you access the property using bracket notation (JsUser[mySym]), JavaScript correctly retrieves the value associated with the Symbol key.-------------------------------------------------------------------------------------------------------------------->

JsUser.email="hitesh@chatgpt"
// Object.freeze(JsUser)//prevent changes to JsUser cannot add, remove, or modify properties of a frozen object

JsUser.email="nikita@google"
console.log(JsUser);


JsUser.greeting1=function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting1);//[Function (anonymous)]
console.log(JsUser.greeting1());//undefined

JsUser.greeting2=function()
{
    console.log(`Hello JsUser, ${this.name}`);  //"" to `` is called string interpolation line 44 & 52
}
console.log(JsUser.greeting2);//[Function (anonymous)]
console.log(JsUser.greeting2())//undefined