//array-copy operations : Shallow copy (pass the reference of properties )

//array definition
const myArr=[1,2,"nilisha",true]

const myArr2=new Array(1,2,3,4)
console.log(myArr2[2]);

//array methods

myArr2.push(6)
myArr.pop();
console.log(myArr2);

//to insert at begin
myArr.unshift(9)
console.log(myArr);

//to remove from begin
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

//join:to convert array elements strings format
const newArr=myArr2.join()
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);


//slice : include first indx but not last and does not change original array
const arr1=myArr2.slice(1,3)
console.log("original array : ",myArr2);
console.log("sliced array : ",arr1);

///splice : include first and last index and change original array
const arr2=myArr2.splice(1,3)
console.log("original array : ",myArr2);
console.log("spliced array : ",arr2);

// <-------------- to combine two arrays-------------->

const arr=[1,2,3,4,5]
const arr3=[54,665,755]

//1 push : push into existing array
arr.push(arr3)
// console.log("push",arr);
console.log(arr[5][2]);

//2 concat : return new array but push into arr as element
const arrFinal1=arr.concat(arr3)
// console.log("conact",arrFinal1);

//3 spread operator(...) : return new array
const arrFinal2 =[...arr,...arr3]
console.log("spread",arrFinal2);


// flat : used to flatten nested arrays. It creates a new array that's a one-dimensional version of the original array

const anotherArr=[1,2,3,[4,5,6],[7,8,[9,10]]]
console.log(anotherArr);

const flatArr=anotherArr.flat(Infinity) //give depth to flat
console.log(flatArr);

//sometimes data is not in array format eg. for web scrapping so convert
console.log(Array.isArray("nilisha"));
console.log(Array.from("nilisha")); 
console.log(Array.from({name:"nilisha"})); //give empty array ,need to specify key or value to be converted to array format


let score1=100
let score2=200
let score3=100
console.log(Array.of(score1,score2,score3)); //[100,200,300]