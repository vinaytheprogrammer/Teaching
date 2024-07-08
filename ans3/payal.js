// Function to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

checkNumber(5);   
checkNumber(-3);  
checkNumber(0);   

// Variable for the current hour (24-hour format)
let currentHour = new Date().getHours(); 

// Function to print a greeting based on the time of day
function greetBasedOnTime(hour) {
    if (hour < 12) {
        console.log("Good Morning!");
    } else if (hour < 18) {
        console.log("Good Afternoon!");
    } else {
        console.log("Good Evening!");
    }
}

// Call the function with the current hour
greetBasedOnTime(currentHour);

greetBasedOnTime(10);  
greetBasedOnTime(14); 
greetBasedOnTime(20);  
