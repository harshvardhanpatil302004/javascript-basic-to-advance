//if
// const isUserLoggedIn=true;
// if(isUserLoggedIn){
// console.log("execute");

// }
// if(2=="2"){// true
// console.log("execute");

// }
// if(2==="2"){// false === strict equal, checks datatypes
// console.log("execute");

// }

// // <, >, <=, >=, !=, ==, ===

// const temp=50;
// if (temp==50) {
//     console.log("summer is hot");
    
// } else {

//  console.log("summer is not hot");
    
// }

// const score=200
// if(score>200){
//     const power="fly"// if we use var instead of const there will be no error as var is global
//     console.log(`${power}, you are flying`);
// }
// console.log(`${power}, you are flying`);// error, power is not defined in this scope

const balance=1000
// if (balance>100) console.log("test"), console.log("test 2");// implicit way of coding ,can write code in this way, but not recommended. in this way ending with semi colen necessary

if (balance<100) {
    console.log("less than 100");
}
else if (balance<500) {
    console.log("less than 500");
}
else if (balance<750){
    console.log("less than 750");
}
else{
    console.log("more than 750");
}

const isUserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (isUserLoggedIn && debitCard ) {  
    console.log("user is logged in and has debit card");
}  

if (loggedInFromEmail||loggedInFromGoogle){
    console.log("user logged in from email or google");
}
