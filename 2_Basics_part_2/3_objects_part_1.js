// Object literals

const mySym=Symbol("key1")
const JsUser={
    name: 'John',
    "full name":"abcxyz",
    age: 30,
    isLoggedIn: false,
    location:"Pune",
    lastLoginDays:["Monday","Saturday"],
    email:"harsh@gmail.com",
    [mySym]: "key1"


}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="abc@gmail.com"
// Object.freeze(JsUser)

// JsUser.email="abghrhrxhryc@gmail.com"

// console.log(JsUser);

JsUser.greeting=function () {
 console.log("Hello World");
    
}

console.log(JsUser.greeting());

JsUser.greeting2=function () {
    console.log(`Hello JS user, ${this.name}`);    
   }
   console.log(JsUser.greeting2());
