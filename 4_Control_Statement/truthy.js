const userEmail="harsh@com"// if statement will get execute
// const userEmail="" // else statement will execute

if (userEmail){
    console.log("Email is there")
}
else{
    console.log("Email is not there")
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// true, "0", "false"," ", [],{}, function(){}// anything written inside "" is truthy value , even empty space also, Empty function is also truthy value


// username=""
// if (username.length===0){
//     console.log("empty");
// }

// const emptyobj={}
// if (Object.keys(emptyobj).length===0){
//     console.log("Empty object");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
val1=5??10
console.log(val1)// output: 5
// if val1 is null or undefined then it will take 10 otherwise it will take 5
let val2;
val2=null??10
console.log(val2)// output: 10

let val3;
val3=undefined??10
console.log(val3)// output: 10

// Terniary operator

const iceTeaPrice=100
iceTeaPrice<=80? console.log("less than 80"): console.log("more than 80");


