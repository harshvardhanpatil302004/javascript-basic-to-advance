const marvel = ["cap", "ironman", "thor"];
const dc = ["superman", "batman", "flash"];

marvel.push(dc);
console.log(marvel);
// Output: ["cap", "ironman", "thor", ["superman", "batman", "flash"]]
// Explanation: The `push` method adds the entire `dc` array as a single element to the `marvel` array, creating a nested array.

const heros = marvel.concat(dc);
console.log(heros);
// Output: ["cap", "ironman", "thor", ["superman", "batman", "flash"], "superman", "batman", "flash"]
// Explanation: `concat` adds elements of the `dc` array to the `marvel` array and includes the nested array from the previous `push()`.

const all_heros = [...marvel, ...dc];
console.log(all_heros);
// Output: ["cap", "ironman", "thor", ["superman", "batman", "flash"], "superman", "batman", "flash"]
// Explanation: The spread operator (`...`) unpacks the elements of both arrays into a new array. However, since the `marvel` array contains a nested array, it remains as is.

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// Explanation: `flat(Infinity)` flattens all nested arrays into a single-level array. The `Infinity` parameter ensures all levels of nesting are flattened.

console.log(Array.isArray("Hello"));
// Output: false
// Explanation: `Array.isArray()` checks if the argument is an array. Since "Hello" is a string, it returns `false`.

console.log(Array.from("Hello"));
// Output: ["H", "e", "l", "l", "o"]
// Explanation: `Array.from()` creates an array from an iterable (like a string). Each character of the string becomes an element in the resulting array.

console.log(Array.from({ name: "Hello" }));
// Output: []
// Explanation: `Array.from()` expects an iterable or array-like object. Since the object `{ name: "Hello" }` is not iterable, it returns an empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]
// Explanation: `Array.of()` creates a new array with the provided arguments. It simply places the arguments into a new array.
