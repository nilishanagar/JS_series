const myNumers=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNumers.map((num)=>{return num+10})
console.log(newNums);

// <---------------------Chaining:mtlb ek ke baad ek method lagana---------------->
const newnums=myNumers
           .map((num)=>num*10)
           .map((num)=>num+2)
           .filter((num)=>num>=40)

console.log(newnums);

// Read: https://chatgpt.com/c/ae87197d-f36e-4849-b1d0-60fc4768017b