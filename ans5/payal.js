// Assignment 5: Functions

// Function to return the sum of two numbers
function sumNumbers(a, b) {
    return a + b;
}

// Test cases
console.log(sumNumbers(3, 5));  
console.log(sumNumbers(-1, 1)); 
console.log(sumNumbers(10, -7)); 

// Function to return a greeting message
function greet(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

// Test case
console.log(greet('Payal'));  

// Function to return the largest number in an array
function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }

    let largest = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

// Test case
const numbers = [5, 12, 9, 3, 21, 7];
console.log(`The largest number in the array is: ${findLargestNumber(numbers)}`); 
