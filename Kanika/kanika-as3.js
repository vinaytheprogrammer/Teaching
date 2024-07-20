function checkNumber(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // Example usage
  checkNumber(5);   // Output: The number is positive.
  checkNumber(-2);  // Output: The number is negative.
  checkNumber(0);   // Output: The number is zero.
  
  
  function greetByTime() {
    const currentHour = new Date().getHours(); // Get current hour (0-23)
  
    if (currentHour >= 5 && currentHour < 12) {
      console.log("Good morning!");
    } else if (currentHour >= 12 && currentHour < 17) {
      console.log("Good afternoon!");
    } else {
      console.log("Good evening!");
    }
  }
  
  // Example usage
  greetByTime(); // Output will vary depending on the current time
  