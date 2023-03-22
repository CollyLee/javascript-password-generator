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

// user selects what arrays to work from (which leads to the selection of a final array)
var question1 = confirm("Would you like to include uppercase?")
var question2 = confirm("Would you like to include numbers?")
var question3 = confirm("Would you like to include special characters?")

// determines the length of the final password
var question4 = prompt("How many characters would you like your password to be?/(max 258)")

// starter arrays, will be the building blocks of the final concat arrays
var lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar: ["!", "^", "@"]
var number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// arrays used based on the user's answers to the questions
var array01 = lowercase.concat(uppercase)
var array012 = lowercase.concat(uppercase, specialChar)
var array0123 = lowercase.concat(uppercase, specialChar, number)
var array02 = lowercase.concat(specialChar)
var array023 = lowercase.concat(specialChar, number)
var array03 = lowercase.concat(number)

function generatePassword: function () { 
  
var password = []

// to pick random lowercase
Math.floor(Math.random() * lowercase.length);

// to pick random uppercase
Math.floor(Math.random() * lowercase.length);

// to pick random special chars
Math.floor(Math.random() * specialChar.length);
  
// to pick random numbers
Math.floor(Math.random() * number.length);



if (question1 && question2 && question3) { 
var random = Math.floor(Math.random() * lowercase.length);
password.concat(lowercase[random])

} else if (question1 && question2) {
  _____;

} else if (question3) {
  _____;

} else if (question2 && question3) {
  _____;

} else if (question2) {
  _____;

} else if (question1 && question3) {
  _____;

} else {
  _____;
}

}




// 50 char, numbers, special characters