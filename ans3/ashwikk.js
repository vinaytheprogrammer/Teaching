// Part 1: Function to Check if a Number is Positive, Negative, or Zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

// Part 2: Greeting Based on Time of Day
function getGreeting(hour) {
    if (hour >= 0 && hour < 12) {
        console.log("Good morning!");
    } else if (hour >= 12 && hour < 18) {
        console.log("Good afternoon!");
    } else if (hour >= 18 && hour < 24) {
        console.log("Good evening!");
    } else {
        console.log("Invalid hour! Please enter a value between 0 and 23.");
    }
}

// Example usage for Part 1
checkNumber(10);  // Output: 10 is positive
checkNumber(-5);  // Output: -5 is negative
checkNumber(0);   // Output: 0 is zero

// Example usage for Part 2
const currentHour = new Date().getHours();
getGreeting(currentHour);  // Output will depend on the current hour
