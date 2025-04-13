const myArr = [0, 1, 2, 3, 4, 5]; 
// Creates an array with elements 0 through 5

const myNames = ["abc", "pqr", "xyz"]; 
// Creates an array with string elements "abc", "pqr", and "xyz"

const myArr1 = new Array(1, 2, 3, 4, 5); 
// Creates a new array with elements 1 through 5

console.log(myArr1[0]); 
// Output: 1 (accesses the first element of `myArr1`)

// Array methods

myArr.push(6); 
// Adds the number 6 to the end of `myArr`
console.log(myArr); 
// Output: [0, 1, 2, 3, 4, 5, 6]

myArr.pop(6); 
// Removes the last element from `myArr` (the value passed, 6, is ignored)
console.log(myArr); 
// Output: [0, 1, 2, 3, 4, 5]

myArr.unshift(9); 
// Adds the number 9 to the beginning of `myArr`
console.log(myArr); 
// Output: [9, 0, 1, 2, 3, 4, 5]

myArr.shift(); 
// Removes the first element (9) from `myArr`
console.log(myArr); 
// Output: [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(9)); 
// Checks if 9 is present in `myArr`
// Output: false (since 9 has been removed)

console.log(myArr.indexOf(5)); 
// Finds the index of the element 5 in `myArr`
// Output: 5 (5 is located at index 5)

const newArr = myArr.join(); 
// Joins all elements of `myArr` into a string, separated by commas
console.log(myArr); 
// Output: [0, 1, 2, 3, 4, 5] (the array remains unchanged)

console.log(typeof newArr); 
// Output: "string" (since `join()` produces a string)

console.log("a", myArr); 
// Logs the current value of `myArr`
// Output: a [0, 1, 2, 3, 4, 5]

const myna1 = myArr.slice(1, 3); 
// Creates a new array with elements from index 1 to 2 (3 is exclusive)
console.log(myna1); 
// Output: [1, 2]

console.log("b", myArr); 
// Logs the current value of `myArr` (unchanged by `slice()`)
// Output: b [0, 1, 2, 3, 4, 5]

const myna2 = myArr.splice(1, 3); 
// Removes 3 elements starting from index 1 and returns them as a new array
console.log(myna2); 
// Output: [1, 2, 3] (the removed elements)

console.log("c", myArr); 
// Logs the updated `myArr` after the `splice()` operation
// Output: c [0, 4, 5]
