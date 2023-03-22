// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// starter arrays, will be the building blocks of the final concat arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "^", "@"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// arrays used based on the user's answers to the questions
var arrayLU = lowercase.concat(uppercase)
var arrayLUS = lowercase.concat(uppercase, specialChar)
var arrayLUSN = lowercase.concat(uppercase, specialChar, number)
var arrayLS = lowercase.concat(specialChar)
var arrayLSN = lowercase.concat(specialChar, number)
var arrayLN = lowercase.concat(number)

// coding to select ONE random item from the correct arrays based on user's answers
var ranarrayLU = Math.floor(Math.random() * arrayLU.length);
var ranarrayLUS = Math.floor(Math.random() * arrayLUS.length);
var ranarrayLUSN = Math.floor(Math.random() * arrayLUSN.length);
var ranarrayLS = Math.floor(Math.random() * arrayLS.length);
var ranarrayLSN = Math.floor(Math.random() * arrayLSN.length);
var ranarrayLN = Math.floor(Math.random() * arrayLN.length);


// function that is run when the Generate Password button is clicked
function generatePassword() { 
  var questionU = confirm("Would you like to include uppercase?")
  var questionN = confirm("Would you like to include numbers?")
  var questionS = confirm("Would you like to include special characters?")
  var questionL = prompt("How many characters would you like your password to be?/(max 128)")

  // Pulls random items from the appropriate ranarray, looped for as many times as the user has selected character length
  if (questionU && questionS && questionN) { 
  for (let i = 0; i < arrayLUSN.length; i++) {
  ranarrayLUSN;
   }
}
  
  

alert(password) 
 }


// else if (questionU && questionN) {
//   var password = [];

// } else if (questionS) {
//   var password = [];

// } else if (questionN && questionS) {
//   var password = [];

// } else if (questionN) {
//   var password = [];

// } else if (questionU && questionS) {
//   var password = [];

// } else {
//   alert("You must choose at least one");
// }