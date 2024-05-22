// read : https://www.w3schools.com/js/js_object_prototypes.asp
//read : https://chatgpt.com/c/971e9b99-4411-4ff9-a0d3-5012686b11f5 


// <-----------Object me new Keyword -------------->

//javascript me har ek chiz object hi hai:
function multiply(num)
{
    return num*5;
}

multiply.power=2;
console.log(multiply(3));
console.log(multiply.power);
console.log(multiply.prototype); //ye prototype methods ke sath sath kuch internal properties bhi deta hai


//injecting properties/methods inside function using prototype
function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
console.log(`score is ${this.score}`); //jisne bhi score pucha h, uska bta do
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe();//error , isme properties inject huyi hai , pr btana padega so use new keyword  in chai delcaration
tea.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/