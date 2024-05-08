const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
    // console.log(item);
    return item   //foreach loop does not return anything
})

console.log(values);


// <-------------------filter operation----------------------->
// return new array & not modify original array
const mynums=[1,2,3,4,5,6,7,8,9,10]

const nums=mynums.filter((num)=>num>4)
console.log(nums);

const newnums=mynums.filter((num)=>{
   return num>4
})
console.log(newnums); //use return with {}


// //not efficient 25 to 32
// const newNums=[]
// mynums.forEach((num)=>{
//     if(num>2)
//         {
//             newNums.push(num)
//         }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks=books.filter((bk)=> bk.genre==='History')
//   console.log(userBooks);

  const bookPublished=books.filter((bk)=>bk.publish>=2000 &&bk.edition<=2014)
  console.log(bookPublished);

  //read : https://chatgpt.com/c/bd23b262-02a5-4597-8c26-1d195cb504a5