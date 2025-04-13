// let a=100
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
//     console.log("inner a:", a)
// }

// console.log(a)
// // console.log(b)
// console.log(c)// output: 30 will occured in it even though it should not occur because c is declared inside {} scope


// function one() {
//     const username="harsh"
//     function two(){
//         const website="youtube"
//         console.log(username);
        
//     }
//     // console.log(website)
//     two();
// }
// one();

// if (true){
//     const username="harsh"
//     if(username=="harsh"){
//         const website="youtube"
//         console.log(username+website);
        
//     }
//     console.log(website)
// }
// console.log(username); // see where error occures


////////////intersting/////////////////////////

console.log(addone(5));
function addone(num) {
    return num+1
}
addTwo(5)// here error will occur

const addTwo=function(num){
    return num+2
}
