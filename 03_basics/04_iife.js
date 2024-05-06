//Immediately Invoked Function Expressios (IIFE) : global scope ke pollution se problem hoti h kai bar, toh uss gobal scope ke pollution ko htane ke liye iife ka use kiya

//named iife
(function chai(){
    console.log(`DB Connected`);
})();

// ()() //first () contains function definition & second () for execution  & use ; to end scope/ execution of two iife function

//unnamed iife
((name)=>{
    console.log(`DB Connected Two ${name}`);
})('nilisha')


// Read : https://chatgpt.com/c/c18b2150-a444-4479-9fbe-12cddb6deea2