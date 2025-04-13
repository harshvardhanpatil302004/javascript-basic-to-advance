// const user={
//     username:"harsh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, Welcome to the store`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function hello(){
//     let username="harsh"
//     console.log(this.username);//output undefined.
// }

// hello()



// const hello= function hello(){
//     let username="harsh"
//     console.log(this.username);//output undefined.
// }

// hello()


// const hello= ()=>{
//     let username="harsh"
//     console.log(this);// output: {}
    
//     console.log(this.username);//output: undefined.
// }

// hello()


// basic arrow function

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

//implicit return


// const addTwo=(num1, num2)=> num1+num2 
const addTwo=(num1, num2)=>( num1+num2 ) // when used () no need to use return keyword but for {} return keyword necessary
console.log(addTwo(3,4));

const username=()=>({username:"harsh"})
console.log(username()); //output: {username: "harsh"} 