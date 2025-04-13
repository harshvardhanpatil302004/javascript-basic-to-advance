// Immediately Invoked Function Expression (IIFE)

//named iife
(function hello() {
    console.log(`DB connected`);
})(); // here semi colen is necessary to avoid syntax error.If only hello fuction is there then it will run without semi colen but due to writing second iife function below , we have to give  semi colen to avoid syntax error.

//unnamed iife
( ()=>{
    console.log(`DB connected two`);
    
})();

// unnamed iife with parameter
( (name)=>{
    console.log(`${name}, hello`);
    
})("harsh")