const name="nilisha"
const repoCount=8

//not preferred
console.log(name+repoCount+" Value");  

//preferred
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//various methods of string  are
const gameName=new String('nilishaaa')

console.log(gameName[0]);       //n
console.log(gameName.__proto__); //give empty object as output
console.log(gameName.length);    //8 
console.log(gameName.toUpperCase()); //does not change original value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString =gameName.substring(0,4) //0 include & 4 excluded & not -ve values
console.log(newString); //nili

const anotherString=gameName.slice(-8,4) //can take -ve values start from reverse
console.log(anotherString); //ili

const newStringOne="    jaipur    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%30choudary"
console.log(url.replace('%30','_'));

console.log(url.includes('nilisha'));

console.log(url.split('.'));



//Tip : Read various methods of string and their syntax 