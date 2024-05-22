let myName="nilisha   "
let myChannel="chai   "

console.log(myName.trim().length); //but we want hme truelength mil jaye saari strings ki bina trim ke so we create method



let myHeroes=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//agar object prototype me kuch inject krte h , toh wah sabke pass chal jati hai
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh();
myHeroes.hitesh();



//agar Array me inject krenge toh Object prototype ke pass nhi jayegi
Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
}
myHeroes.heyHitesh();
// heroPower.heyHitesh(); //error


// <read: https://chatgpt.com/c/971e9b99-4411-4ff9-a0d3-5012686b11f5

// <------------------Inheritance------------------->
const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false,
}

const TASupport={
    makeAssignment:'Js assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User //teacher user ki saari properties ko access kr sakta h : old syntax


// <-----------modern syntax---------->
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName="ChaiAurCode    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"nilisha".trueLength()
"iceTea".trueLength()