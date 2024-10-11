const correctPassword = "letmein"; // Hardcoded correct password
let enteredPassword;

do {
  enteredPassword = prompt("Enter your password:");

  if (enteredPassword !== correctPassword) {
    console.log("Incorrect password. Please try again.");
  }
} while (enteredPassword !== correctPassword);

console.log("Success !You have entered the correct 
