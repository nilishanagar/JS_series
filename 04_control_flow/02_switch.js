//basic syntax
// switch (key) {
//     case value:

//         break;

//         defaut:
//         break;
// }


//to copy multiple lines use : shift+Alt+downArrow
const month="march"
switch(month)
{
    case "jan" :
        console.log("January");
        break;
    case "feb" :
        console.log("February");
        break;
    case "march" :
        console.log("March");
        // break;
    case "april" :
        console.log("April");
    
    default:
        console.log("default case matched");
        break;
}