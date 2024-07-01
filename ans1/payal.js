
// Assignment 1: Variables and Data Types

// Declare a variable to store your name and print it to the console
const name = "Payal Dabas";
console.log(name);
// Create variables for your age, a boolean indicating if you are a student, and your favorite hobbies (use an array)
let age = 20;
let isStudent = true;
let favoriteHobbies = ["playing badminton", "reading", "travelling"];
// Print the types of these variables using typeof
console.log(typeof name);          // string
console.log(typeof age);           // number
console.log(typeof isStudent);     // boolean
console.log(typeof favoriteHobbies); // object


 // Assignment 2: Basic Operations

// Create two variables with numerical values and perform addition, subtraction, multiplication, and division.
let a = 10;
let b = 5;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Concatenate two strings and print the result.
let string1 = "Hello";
let string2 = "World";

let concatenatedString = string1 + " " + string2;
console.log("Concatenated String:", concatenatedString);

// Use a template literal to create a sentence incorporating multiple variables.
let city = "Ghaziabad";
let weather = "sunny";

let sentence = `Today in ${city}, the weather is ${weather}.`;
console.log(sentence); 