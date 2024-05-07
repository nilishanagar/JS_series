const isUserLoggedIn = true;
const tempearture = 41
if (2 != 3) {
    console.log("less than 50");
}
else {
    console.log("not equal");
}
console.log("temperature is greater than 50");
//conditional operators : <,>,<=,>=,==,!=,===,!==



// <------------scope---------->
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power : ${power}`);
}
// console.log(`User power : 4{power}`); //cannot accesse power as let is block scoped



// <---------shorthand notation : but not preffered------->
const balance = 1000
if (balance > 500) console.log("test"), console.log("test2");



//nested if else
const bal = 1000
if (bal < 300) {
    console.log("balanace less than 300")

}
else if (bal < 500) {
    console.log("balance less than 500");

}
else {
    console.log("balance greater");
}



//real life use :
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user Logged in ");
}

