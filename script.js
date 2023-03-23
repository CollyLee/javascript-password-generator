// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// starter arrays, will be the building blocks of the final concat arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "^", "@"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var userArray = []
password = []

// function that is run when the Generate Password button is clicked
function generatePassword() { 
  var questionLow = confirm("Would you like to include lowercase")
  var questionUpp = confirm("Would you like to include uppercase?")
  var questionNum = confirm("Would you like to include numbers?")
  var questionSpe = confirm("Would you like to include special characters?")
  var questionLen = prompt("How many characters would you like your password to be?/(max 128)")

  // concats the final array based on the answers to questionSpe
 
  if (questionLow) {
    userArray = userArray.concat(lowercase);
    // password.push(lowercase)
  }
  
  if (questionUpp) {
    userArray = userArray.concat(uppercase);
    // password.push(uppercase);
  }

  if (questionNum) {
    userArray = userArray.concat(number);
    // password.push(number);
  }

  if (questionSpe) {
  userArray = userArray.concat(specialChar);
  // password.push(specialChar);
  }

  // need to add mandatory characters
  for (let i=0; i < questionLen; i++) {
    password.push(userArray[Math.floor(Math.random()*questionLen)])
  }

  password = password.join("")

alert(password)
 }











 // // arrays used based on the user's answers to the questionSpe
// var arrayLU = lowercase.concat(uppercase)
// var arrayLUS = lowercase.concat(uppercase, specialChar)
// var arrayLUSN = lowercase.concat(uppercase, specialChar, number)
// var arrayLS = lowercase.concat(specialChar)
// var arrayLSN = lowercase.concat(specialChar, number)
// var arrayLN = lowercase.concat(number)

// // coding to select ONE random item from the correct arrays based on user's answers
// var ranarrayLU = Math.floor(Math.random() * arrayLU.length);
// var ranarrayLUS = Math.floor(Math.random() * arrayLUS.length);
// var ranarrayLUSN = Math.floor(Math.random() * arrayLUSN.length);
// var ranarrayLS = Math.floor(Math.random() * arrayLS.length);
// var ranarrayLSN = Math.floor(Math.random() * arrayLSN.length);
// var ranarrayLN = Math.floor(Math.random() * arrayLN.length);