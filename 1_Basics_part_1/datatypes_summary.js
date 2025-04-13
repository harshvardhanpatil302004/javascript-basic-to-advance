// // Datatypes are of two types
// // Primitive and Non-Primitive


// const score = 100; // typeof score: "number"
// const scoreValue = 100.3; // typeof scoreValue: "number"

// const isLoggedIn = false; // typeof isLoggedIn: "boolean"
// const outsideTemp = null; // typeof outsideTemp: "object" (this is a known quirk in JavaScript)
// let userEmail; // typeof userEmail: "undefined"

// const id = Symbol("123"); // typeof id: "symbol"
// const anotherId = Symbol("123"); // typeof anotherId: "symbol"

// console.log(id == anotherId); // output: false

// const bigNumber = 47893286367326800238650872560326583563785386n; // typeof bigNumber: "bigint"

// // Non-Primitive or Reference type: Object, Array, Function

// const user = ["abc", "xyz", "pqr"]; // typeof user: "object"
// let obj1 = {
//   name: "John",
//   age: 30,
// }; // typeof obj1: "object"

// const myFunction = function () {
//   console.log("Hello World");
// }; // typeof myFunction: "function"


//**************************************

// Stack(Primitive), Heap(Non-Primitive)
//Primitive type goes in stack and is call by value
let id = "abc"
let anotherId = id
anotherId = "pqr"
console.log(id); // output: "abc"  call by value
console.log(anotherId);//output: "pqr"

// Non-Primitive goes in heap and is call by referance
let user1 = {
    email: "user1@gmail.com",
    upi: "123@abc"
}
let user2 = user1
console.log(user2)// output:{ email: 'user1@gmail.com', upi: '123@abc' }   

user2.email="abc@gmail.com"
console.log(user1.email); // output: "abc@gmail.com"  call by reference
console.log(user2.email); // output: "abc@gmail.com"  call by reference


