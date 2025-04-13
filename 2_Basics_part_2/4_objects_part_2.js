// Ways of declaring objects

// Declaring an empty object using Object constructor (not commonly used)
// const tinderUser = new Object()

// Declaring an empty object using object literal syntax (preferred way)
const tinderUser = {};
tinderUser.id = "123abc"; // Adding a property 'id' with value "123abc"
tinderUser.name = "xyz"; // Adding a property 'name' with value "xyz"
tinderUser.isLoggedIn = "false"; // Adding a property 'isLoggedIn' with value "false"

// Logging the object 'tinderUser' to the console
console.log(tinderUser);
// Output: { id: '123abc', name: 'xyz', isLoggedIn: 'false' }


const regularUser = {
    email: "abc@gmail.com", // Adding a property 'email'
    fullname: {
        userFullName: { 
            first: "John", // Nested property 'first' inside 'userFullName'
            last: "Doe"  // Nested property 'last' inside 'userFullName'
        }
    }
};

// Accessing a deeply nested property
// console.log(regularUser.fullname.userFullName.first);
// Output: 'John' - Retrieves the first name from the nested object


// Defining objects with numeric keys and string values
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Attempting to merge objects (incorrect syntax - results in an object of objects)
// const obj3 = { obj1, obj2 };

// Merging objects using Object.assign() (old way, creates a new object)
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// Merging objects using the spread operator (modern way, concise and preferred)
const obj3 = { ...obj1, ...obj2, ...obj4 };
console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// Combines all properties from obj1, obj2, and obj4 into a single object


// Defining an array of objects representing users
const user = [
    { id: 1, name: "John" },  // First user object
    { id: 2, name: "Jane" },  // Second user object
    { id: 3, name: "Bob" }    // Third user object
];

// Accessing a specific property from the array of objects
user[1].id; // Accesses the 'id' of the second user (array index starts at 0)


// Object methods to retrieve information from 'tinderUser'
console.log(tinderUser); 
// Output: { id: '123abc', name: 'xyz', isLoggedIn: 'false' }

console.log(Object.keys(tinderUser)); 
// Output: ['id', 'name', 'isLoggedIn'] - Retrieves all keys in the object

console.log(Object.values(tinderUser)); 
// Output: ['123abc', 'xyz', 'false'] - Retrieves all values in the object

console.log(Object.entries(tinderUser)); 
// Output: [['id', '123abc'], ['name', 'xyz'], ['isLoggedIn', 'false']] 
// Retrieves an array of key-value pairs

console.log(tinderUser.hasOwnProperty("isLoggedIn")); 
// Output: true - Checks if 'tinderUser' has the 'isLoggedIn' property

// destructure of objects
const course={
    coursename: "javascript",
    price:"999",
    courseinstructor:"abcxyz"

}
// console.log(course.courseinstructor);// normal way to access the value in the object
 
const{courseinstructor:instructor}=course
console.log(instructor);// destructured way to access the value in the object


// api are earlier called through xml format but now in json format
// {
//     "name":"abc",
//     "coursename":"javascript",
//     "price":999
// }
//json are called as objects without name like the above sample format
// also can be called as array , sample below
// [
//     {},
//     {},
//     {}
// ]


