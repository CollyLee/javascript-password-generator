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

  // user given error message if they don't pick at least one character type to use
  if (!questionLow && !questionUpp && !questionNum && !questionSpe) {
    alert("You have to choose at least one!")
    return generatePassword()
  }
  
  // user sets the length of the final password
  var questionLen = prompt("How many characters would you like your password to be?/(min 8, max 128)")
  
  // gives user error message if their password isn't between 8 and 128 characters
  if (questionLen < 8 || questionLen > 128) {
    alert("Must be between 8 and 128 characters!")
    return generatePassword()
  }
  
  // concats the final array based on the answers to questionSpe
  if (questionLow) {
    userArray = userArray.concat(lowercase);
    password.push(lowercase[Math.floor(Math.random()*lowercase.length)])
  }
  
  if (questionUpp) {
    userArray = userArray.concat(uppercase);
    password.push(uppercase[Math.floor(Math.random()*uppercase.length)])
  }

  if (questionNum) {
    userArray = userArray.concat(number);
    password.push(number[Math.floor(Math.random()*number.length)])
  }

  if (questionSpe) {
    userArray = userArray.concat(specialChar);
    password.push(specialChar[Math.floor(Math.random()*specialChar.length)])
  }

  // reqChars = need a way to count how many questions were answered yes

  // pushes one character to the final password, repeated based on how long the user wants final password to be
  for (var i = 3; i < questionLen; i++) {
    password.push(userArray[Math.floor(Math.random()*questionLen)])
  }

  // joins the resulting array into one string
  passwordText = password.join("")

  alert(passwordText)
  return
 }