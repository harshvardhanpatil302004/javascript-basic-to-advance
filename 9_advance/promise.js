// const promiseOne=new Promise(function(resolve,reject){
//      // do an async task
//      // db call, crpytograpgy, network
//      setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
//      },1000)
   
     
// })

// promiseOne.then(function(){
//     console.log('promise consumes')
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('async task 2 is complete');
//     resolve()
// },1000)
// }).then(function(){
//     console.log('promise 2 consumes')
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({
//             userName:'harsh',
//             email:'harsh@hamil.com'
//         })
//     }, 1000);


// })


// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=false;
//         if(!error){
//             resolve({userName:'harsh',
//                 email:'harsh@hamil.com'
//             })

//         }
//         else{
//             reject('error:something went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.userName
// }).then((userName)=>{
//     console.log(userName)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
// console.log('finally')
// })

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)

})

// async function consumePromiseFive() {
//     try {
//     const response=await promiseFive()
//     console.log(response)
//     }catch(error){
//         console.log(error)
//     }
    
// }


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})