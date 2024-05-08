const coding = ["js", "ruby", "java", "python", "cpp"]

// <---------------running functions in forEach loop----------------->
//callback function does not have any name , and it takes arrays each element one by one 
coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach((item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe) //here passing reference of function not executing it 

//forEach can have three arguments
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


//in real life scenerio : we have array of objects : [{},{},{}]
const myCoding = [
    {
        lang: "javascript",
        filename: "js"
    },
    {
        lang: "java",
        filename: "java"
    },
    {
        lang: "pyhton",
        filename: "py"
    }
]

//iteration over array of objects
myCoding.forEach((item)=>{
    console.log(` ${item.filename} :${item.lang}`);
})