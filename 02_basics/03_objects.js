const twitterUser=new Object() //singleton object 
const instaUser={} //not singleton object

console.log(twitterUser); //{} empty object
console.log(instaUser);//{}

// <----------object nesting-------------->
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstName:"nilisha",
            lastName:"nagar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName.firstName);

//optional chaining (?.) : agr fullname exits nhi kr rha ho toh, private protection used in case of api response
// console.log(regularUser?.fullname?.userFullName?.city); //undefined


// <----------combine objects----------->
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//1) spread operator
// const obj3={...obj1,...obj2}
// console.log(obj3);

//2) using assign
const obj3=Object.assign({},obj1,obj2); //{} is optional but good
console.log(obj3)

//const obj3={obj1,obj2}  insert obj1 and obj2 in obj3


// <------------when data come from database is in array of object form---------->

const users=[
    {id:1,
     email:"n@hmail.com"
    },
    {
        id:2,
        name:"nili"
    }
]

console.log(users[1].name);


const tinderUSer={
    id:"1",
    name:"Vish",
    email:"vi@mail.com"
}

console.log(tinderUSer);
console.log(Object.keys(tinderUSer));//o/p array [ 'id', 'name', 'email' ]: useful
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

//to check any property exist in object or not
console.log(tinderUSer.hasOwnProperty("name")); //true
console.log(tinderUSer.hasOwnProperty("isLoggedI")) //false






