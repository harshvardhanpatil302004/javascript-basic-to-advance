// Creates a new Date object with the current date and time
let myDate0 = new Date(); 
console.log(typeof myDate); 
// Output: "object" (Date objects are of type "object")

console.log(myDate); 
// Output: The current date and time, e.g., "Sun Mar 09 2025 12:10:00 GMT+0530 (India Standard Time)"

// Converts the Date object to a string representation
console.log(myDate.toString()); 
// Output: The current date and time in human-readable string format, e.g., "Sun Mar 09 2025 12:10:00 GMT+0530 (India Standard Time)"

// Converts the date part of the Date object to a human-readable string
console.log(myDate.toDateString()); 
// Output: The current date as a string, e.g., "Sun Mar 09 2025"

// Converts the Date object to a locale-specific string representation
console.log(myDate.toLocaleString()); 
// Output: Date and time in locale-specific format, e.g., "09/03/2025, 12:10:00 pm"

// Creates a Date object for January 23, 2022
myDate = new Date(2022, 0, 23); 
console.log(myDate.toDateString()); 
// Output: "Sun Jan 23 2022" (represents the specified date)

// Creates a Date object for January 23, 2022, with time 05:03
let myDate1 = new Date(2022, 0, 23, 5, 3); 
console.log(myDate1.toLocaleString()); 
// Output: "23/01/2022, 5:03:00 am" (in Indian locale "en-IN")

// Creates a Date object from an ISO date string
let myDate2 = new Date("2023-01-14"); 
console.log(myDate2.toLocaleString()); 
// Output: "14/01/2023, 12:00:00 am" (interpreted as midnight on January 14, 2023)

// Creates a Date object from a custom date string
let myDate3 = new Date("01-14-2023"); 
console.log(myDate3.toLocaleString()); 
// Output: Same as above, interpreted as "14/01/2023, 12:00:00 am"

// Creates a Date object and logs the current timestamp
myDate = new Date("01-14-2023"); 
let myTimeStamp = Date.now(); 
console.log(myTimeStamp); 
// Output: Current timestamp in milliseconds since January 1, 1970

console.log(myDate.getTime()); 
// Output: Timestamp of "01-14-2023" in milliseconds since January 1, 1970

// Converts the current timestamp to seconds and rounds down
console.log(Math.floor(Date.now() / 1000)); 
// Output: Current timestamp in seconds, rounded down

// Logs the current date and time
let myDate = new Date();
console.log(myDate); 
// Output: Current date and time, e.g., "Sun Mar 09 2025 12:10:00 GMT+0530"

// Logs the current month (0-based: January = 0, February = 1, etc.)
console.log(myDate.getMonth()); 
// Output: 2 (for March, as months are 0-based)

// Logs the current day of the week (0-based: Sunday = 0, Monday = 1, etc.)
console.log(myDate.getDay()); 
// Output: 0 (for Sunday)

// Logs the full weekday name for the current date
console.log(myDate.toLocaleString("default", { weekday: "long" })); 
// Output: "Sunday" (or any other weekday depending on the current date)
