let a = 10
const b = 20
var c = 30 //global scope  
if (true) {
   
    //local scope
    let a=100
    const b=200
    console.log("INNER : ",a);
}

console.log(a)
console.log(b)
console.log(c);

// <----browser and Node.js environments have a concept of a global scope, they differ in their implementation and behavior due to their distinct runtime environments and execution contexts.--->

// <-------nested function scope------->

function one(){
    const username="nilisha"
    
    function two(){
        const website="youtube"
        console.log(username);
    }
//    console.log(website);
   two()
}

one()


// <-----------interesting : function hoisting--------------->
console.log(addOne(3)); //can accesss function in 36 declaration : 
function addOne(num)
{
    return num+1
}


console.log(addTwo(5)); //cannot access function before initialisation in this declaration line 43
const addTwo=function(num){
    return num+2
}



