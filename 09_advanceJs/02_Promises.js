const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})


// .then is associated with resolve and below fn is called using resolve() and whateverv promiseOne return goes to then
promiseOne.then(function(){
    console.log("Promise consumed");
})


//2 way to write above functions combine
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// ------------------passing data in resolve and usually data is in object form-------------
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

//user constain whatever promiseThree returns
promiseThree.then(function(user){
    console.log(user);
}
)


// <---------handling resolve and reject-----------
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"nilisha",password:"1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//catch is associated with reject
// we can use any No. of then and catch {It is called chaining:and value returned by above then goes to below then } 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){  //always run
    console.log("Promise is finally resolved or rejected")
})
//to improve readability chaining in nextline



// <----------It is not always necessary to handle promises with then and catch , we can handle them with async await also---->
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'javascript',password:"123"})
        }else{
            reject('ERROR : Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   } 
   catch(error){
    console.log(error);
   }
}

consumePromiseFive(); //it does not give error or it does not handle error directly which is necessary in case of DB or network so use try and catch block


// <----------Fetch ----------->
async function getAllUsers(){
    try{const response=await fetch('https://jsonplaceholder.typicode.com/users')

    const data=await response.json() //it response takes time to convert so use await
    console.log(data);}
    catch(error){
      console.log('ERROR :Cannot fetch data');
    }
}

getAllUsers();


//we can do 100-111 work by then and catch also
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//115-124 isme data from fetch pehle aa rha h, upr ka code baad me print ho rha h ? 
// bcoz : fetch ke liye ek special queue bnti h (priority-queue/microtask queue) toh iski priority jyada hoti h task queue se esliye ye pehle aata h 


// <---------interview question---------->
// Ques :  promise se aapne request kri h , waha se error code aa gya 404 , toh wah aapko resolve me milega ya reject me?

// Ans :toh wah hmesha response me milega, error /reject me tab milega jabwah request kr hi nhi paya

// fetch me data kese bheje read :https://developer.mozilla.org/en-US/docs/Web/API/fetch