//while loop

let index = 0;
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index += 4;
}

let myArray = ["nilisha", "nikita", "vishal"]
let i = 0
while (i < myArray.length) {
    // console.log(`Value is ${myArray[i]}`);
    i++;
}


//do while loop : run atleast once
let score = 11
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 5);

//for-of loop : for iterators(objects,arrays, strings etc)
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// <-------------Maps---------------------->
// store unique values only in the order in which it is inserted

const map = new Map()
map.set('In', "India")
map.set('USA', "America")
map.set('Fr', "France")
map.set('In', "India");

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) { //syntax for destructing key and value differently
 console.log(key,':-',value);
}


//for-of loop not work on objects as not iterable : trick use for-in loop
const myObj={
    name:"nilisha",
    caste:"nagar"
}
// for(const [key,value] of myObj){
//     console.log(key+':-'+value);
// }



//for-in loop
//1) for objects
const myobject={
     js:'javascript',
     cpp:'c++',
     rb:'ruby',
     swift:'swift by apple'
}

for(const key in myobject){
    console.log(`${key} = ${myobject[key]}`);
}

//2) for arrays : arrays ke liye keys bydefault numbers/index hi hota h
const programming=["js","c++","rb","py"]

for(const key in programming){
    console.log(`${key} :- ${programming[key]}`);
}
 

//map is not iterable : so cannot use for-in loop
for(const key in map){
    console.log(key); //not print anything as line 90
}

// <-----------------Use-------------------->
// for arrays : for-of loop & for objects : for-in loop 

//read : https://chatgpt.com/c/fef218d3-77f7-4da6-96c1-d77f33330f3f