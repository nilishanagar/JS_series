const user={
    username:"nilisha",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(username); give undefined as don't know about which context is used
        console.log(`Username:${this.username}`)
    }
}

console.log(user.username);
console.log(user.getUserDetails()) //it is not returning anything so implicitely return undefined 

// <------------------constructor function----------------->
// constructor function give new instance or copy each time , which does not affect others execution , use new keyword

function User(username,userCount,isLoggedIn){
    this.username=username;
    this.userCount=userCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this; //optional , it return bydefault

}

const userOne=new User("nilisha",12,true); //if we don't use new keyword then userTwo will override useOne value as both access same copy
const userTwo=new User("ChaiAurCode",11,false);//that's why we use new keyword in promises
console.log(userOne); 
console.log(userTwo);
console.log(userOne instanceof User); // Output: true
console.log(userTwo instanceof User); // Output: true


// new keyword :
// 1) jese hi aap new keyword use krenge, toh sabse pehle empty object create hoga , jisko instance bolte hai .
// 2) Construction function call hota hai new keyword ke kaaran, ye saare arguments ko usme pack krke de deta hai
// 3) jo bhi arguments likhe h , wah this keyword ke andr inject ho jate hai
// 4) Hme mil jaate h function kr andr.

// -------instanceof operator --------------: The instanceof operator in JavaScript is used to check if an object is an instance of a particular class or constructor function

console.log(userOne.constructor); //constructor property reference hoti h khud ke baare me
