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

// First pop-up question
var question1 = confirm("Would you like to include uppercase?")
var question2 = confirm("Would you like to include numbers?")
var question3 = confirm("Would you like to include special characters?")

var password = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  specialChar: ["!", "^", "@"]
  number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  generatePassword: function () {

  }
}

if (question1 && question2 && question3) {
  _____;
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
