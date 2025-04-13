function sayMyName() {
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    
}
sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
    
// }
// addTwoNumbers()
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)


// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);// this will be print but the value will not be stored in the result variable, it will be undefined

// }
// const result=addTwoNumbers(3,4)
// console.log(result);// output: undefined

// correct way is:

function addTwoNumbers(number1,number2) {
    // let result=number1+number2
    // return result// lenghty code
return number1+number2
    console.log("hello world");// this line of code will not be executed because it is unreachable
}
const result=addTwoNumbers(3,4)
console.log(result);

// function loginUserName(userFullName) {
//     return `${userFullName} just logged in`
// }
// // loginUserName("harsh")// no output because return has no console log 
// console.log(loginUserName("harsh"));// now output will appear

// console.log(loginUserName(""));// if no arguments is passed output will be undefined

function loginUserName(userFullName="abc")// default value of username  abc. due to this userFullName will never be undefined and if condition will never be true. remove ="abc " to make the chances of if condition true
 {
    if (!userFullName)//nwe way of writing, same as userFullName==undefined
    {
        console.log("please enter a username");
        

    }
    return `${userFullName} just logged in`
}

console.log(loginUserName("harsh"));



function calculateCartPrice(...num1) {

   return num1; 
}
console.log(calculateCartPrice(200,400,500,2000))// if we do not know how many paramenter are there we use ... and num1 returns all the parameters as array

const user={
    username: "harsh",
    prices:199
}

function handleObject(anyobject) {
    console.log(`the username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}
// handleObject(user)
//  another method
handleObject({
    username:"abc",
    prices:399
})

function returnSecondValue(getarray) {
    return getarray[1]
    
}
console.log(returnSecondValue([100,200,300,400]));
