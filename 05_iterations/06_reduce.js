const mynums=[1,2,3,4,5]

const myTotal=mynums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval :${currval}`);
    return acc+currval
},0)

console.log(myTotal);


//above function as arrow function
const total=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(total);

const shoppingCart=[
    {item:"js course",
     price:2999
    },
    {item:"java course",
    price:2334
    },
    {
        item:"mobile course",
        price:5000
    },
    {item:"Ds course",
        price:10000
    }
]

const pricepay=shoppingCart.reduce((acc,val)=>acc+val.price,0)
console.log(pricepay);

// Read : https://chatgpt.com/c/e7394dec-0397-497a-86d3-f0c5a06be633