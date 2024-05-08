//for loop

for(let i = 0; i <= 10; i++)
{
//   console.log(i);
  if(i==5)
    {
        console.log(`${i} is best`);
    }
}

//nested for loop
for(let i=1;i<=10;i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(i+'*'+j+'='+i*j);
    }
}


//for length of array : myArray.length;
let myArray=["flash","batman","superman"]
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//break and continue
for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`${i} is detected`);
        break;//break loop
    }
    console.log(`Value of i is ${i}`);
}

for(let i=1;i<=10;i++){
    if(i==5){
        console.log(`${i} is detected`);
        continue;//skip current iteration
    }
    console.log(`Value of i is ${i}`);
}