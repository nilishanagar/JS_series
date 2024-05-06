// <------------functions------------->
function myName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}

myName(); //exeution 
myName; //reference of function

function addTwoNumbers(num1,num2) //num1 & num2 are parameters
{
    console.log(num1+num2);
    // return num1+num2;
}

addTwoNumbers(); //NaN
addTwoNumbers(2,3) //2 & 3 are arguments
addTwoNumbers(2,"5");
addTwoNumbers(2,"a");
addTwoNumbers(2,null);

const result=addTwoNumbers(3,5)
console.log("result ",result); //undefined if no value returned



function loginUser(username) //default value => (username ="sam")
{ if(username===undefined) // same As (!username)
    {
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUser("nilisha")); 
console.log(loginUser()); //undefined 


// <--------------------Rest operator : to pass multiple values in function------------------->
function calculateCartPrice(val1,val2,...num1){
   return num1
}
 
console.log(calculateCartPrice(200,300,5000,343,704)); 


// <---------------Object passing to function --------------->
const user={
    username:"hitesh",
    price:199
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObjects(user);
handleObjects({username:"same",price:242});


// <--------------Array passing to functions------------->
const myNewArray=[200,300,500,100,700]
function Value(getArray){
    return getArray[2];
}

console.log(Value(myNewArray));
