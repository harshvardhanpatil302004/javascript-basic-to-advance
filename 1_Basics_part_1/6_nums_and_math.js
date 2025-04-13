const score = 500;
console.log(score); 
// Output: 500 (just logs the value of score)

const balance = new Number(100);
console.log(balance); 
// Output: [Number: 100] (logs the Number object representation)

console.log(balance.toString()); 
// Output: "100" (converts the number to a string)

console.log(balance.toString().length); 
// Output: 3 (length of the string "100")

console.log(balance.toFixed(2)); 
// Output: "100.00" (formats the number to 2 decimal places)

const otherNumber = 23.9454654;
console.log(otherNumber.toPrecision(3)); 
// Output: "23.9" (formats the number to 3 significant digits)

const otherNumber1 = 123.9454654;
console.log(otherNumber1.toPrecision(3)); 
// Output: "124" (rounds to 3 significant digits)

const otherNumber2 = 1123.9454654;
console.log(otherNumber2.toPrecision(2)); 
// Output: "1.1e+3" (formats to 2 significant digits using exponential notation)

const hundreds = 100000000;
console.log(hundreds.toLocaleString()); 
// Output: "100,000,000" (adds commas for better readability in the default locale)

console.log(hundreds.toLocaleString("en-IN")); 
// Output: "10,00,00,000" (formats according to the Indian numbering system)

//**************************Math**************************

console.log(Math); 
// Output: [Math object] (displays the Math object and its methods)

console.log(Math.PI); 
// Output: 3.141592653589793 (value of π)

console.log(Math.abs(-4)); 
// Output: 4 (absolute value of -4)

console.log(Math.round(4.6)); 
// Output: 5 (rounds to the nearest integer)

console.log(Math.ceil(4.2)); 
// Output: 5 (rounds up to the nearest integer)

console.log(Math.floor(4.8)); 
// Output: 4 (rounds down to the nearest integer)

console.log(Math.min(4, 5, 12, 34, 1, 78, 54)); 
// Output: 1 (minimum value in the list)

console.log(Math.max(4, 5, 12, 34, 1, 78, 54)); 
// Output: 78 (maximum value in the list)

console.log(Math.random()); 
// Output: A random number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1); 
// Output: A random number between 1 (inclusive) and 11 (exclusive)

// Formula to print random values between the given range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Output: A random integer between 10 and 20 (inclusive)
