const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

// Maps

// const map=new Map()
// map.set("in","india")
// map.set("usa","america")
// map.set("fr","france")
// console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// const myObject={
//     "game1":"nfs",
//     "game2":"spiderman"
// };
// for (const [key,value] of myObject) // this will not work because objects are not iterable like maps
//{
//     console.log(key, ':-', value);
// }

// Objects can be iterated in this way

// const myObject={
//     "cpp":"c++",
//     "py":"python",
//     "js":"javascript",

// }

// for (const key in myObject) {
//    console.log(key, ':-', myObject[key]);
// }

// const programming=["js","rb","py","java"]
// for (const key in programming) {
//     console.log(key, ':-', programming[key]);
// }


// const map=new Map()
// map.set("in","india")
// map.set("usa","america")
// map.set("fr","france")
// // console.log(map);
// for (const [key, value] in map) {
//     console.log(key, ':-', value);
//     console.log(key);
// }// here no output will occur because iteration of map will not happen in for in loop

// for each loop

// const programming=["js","rb","py","java"]

// programming.forEach(function(val){
//     console.log(val);
// })

// programming.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// programming.forEach(printme)

// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
];

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFile);
})

// const programming=["js","rb","py","java"]
// const value=programming.forEach((item)=>{
//     console,log(item);
//     return item
// })
// console.log(value); // undefined because of return statement in callback function of forEach loop

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) =>{
//     return num > 4} );// here when we use { } scope is declared and retunn keyword is must
// console.log(newNums);

// using for each
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: "Book 1", genre: "History", releaseYear: 1992 },
    { title: "Book 2", genre: "Science", releaseYear: 2001 },
    { title: "Book 3", genre: "Geography", releaseYear: 2010 },
    { title: "Book 4", genre: "History", releaseYear: 1995 },
    { title: "Book 5", genre: "Science", releaseYear: 2020 },
    { title: "Book 6", genre: "Geography", releaseYear: 2005 },
    { title: "Book 7", genre: "History", releaseYear: 2018 },
    { title: "Book 8", genre: "Science", releaseYear: 1998 },
    { title: "Book 9", genre: "Geography", releaseYear: 2022 },
    { title: "Book 10", genre: "History", releaseYear: 2007 }
];

const modernBooks = books.filter(book => book.releaseYear > 2000);

console.log("Books released after 2000:");
console.log(modernBooks);

const isHistoricalAndOld = book => book.genre === "History" && book.releaseYear < 2000;

const oldHistoryBooks = books.filter(isHistoricalAndOld);

console.log("Historical books released before 2000:");
console.log(oldHistoryBooks);

// using maps
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNumbers=myNumbers.map((num)=>{return num+10})

// chaining methods

const newNumbers=myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
console.log(newNumbers);

// reduce method

const myNum=[1,2,3]
// const sum=myNum.reduce(function(acc,currval)
// {console.log(`acc: ${acc}, and currval:${currval}`);

//     return acc+currval
// },0)

const sum=myNum.reduce((acc,currval)=>(acc+currval),0)
 
console.log(sum);

const shoppingCart = [
    { itemName: "Laptop", price: 800, quantity: 1 },
    { itemName: "Smartphone", price: 600, quantity: 2 },
    { itemName: "Headphones", price: 50, quantity: 4 },
    { itemName: "Mouse", price: 25, quantity: 2 }
];

const totalCost = shoppingCart.reduce((accumulator, cartItem) => {
    accumulator += cartItem.price * cartItem.quantity;
    return accumulator;
}, 0);

console.log("Total Cost:", totalCost);
