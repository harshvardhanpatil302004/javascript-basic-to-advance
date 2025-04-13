const name = "abc";
const repoCount = 100;
// console.log(name+repoCount+"value"); 
// Old way of writing strings (commented out here)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Output: Hello my name is abc and my repo count is 100   new way of writing string

const gameName = new String("Harsh");
console.log(gameName[0]); 
// Output: H (accesses the first character of the string)

console.log(gameName.__proto__); 
// Output:{} (the prototype object of the String object)

console.log(gameName.length); 
// Output: 5 (length of the string "Harsh")

console.log(gameName.toUpperCase()); 
// Output: HARSH (string converted to uppercase)

console.log(gameName.toLowerCase()); 
// Output: harsh (string converted to lowercase)

console.log(gameName.charAt(2)); 
// Output: r (character at index 2)

console.log(gameName.indexOf("h")); 
// Output: 3 (first occurrence of "h" is at index 3)

const newString = gameName.substring(0, 3);
console.log(newString); 
// Output: Har (substring from index 0 to 2)

const anotherString = gameName.slice(-4);
console.log(anotherString); 
// Output: arsh (last 4 characters of the string)

const newString1 = "      qwerty        ";
console.log(newString1); 
// Output:       qwerty         (original string with spaces)

console.log(newString1.trim()); 
// Output: qwerty (string with whitespace removed from both ends)

const url = "https://google%20.com";
console.log(url.replace("%20", "-")); 
// Output: https://google-.com (replaces "%20" with "-")

console.log(url.includes("google")); 
// Output: true (checks if "google" is present in the string)

console.log(url.includes("youtube")); 
// Output: false (checks if "youtube" is present in the string)

// Example string
const str = "Hello World! Welcome to JavaScript.";

// Split the string by spaces
const words = str.split(" ");
console.log(words); 
// Output: ["Hello", "World!", "Welcome", "to", "JavaScript."]

// Split the string by a specific character, like 'o'
const splitByO = str.split("o");
console.log(splitByO); 
// Output: ["Hell", " W", "rld! Welc", "me t", " JavaScript."]
