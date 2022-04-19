// Assignment Code - declare all needed variables
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericsChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Create functions to fill out the critera
// Function to select password length
function passwordLength() {

}

// Function for user to select lower case preference
function lowerCase() {

}
// Function for user to select upper case preference
function upperCase() {

}

// Function for user to select number preference
function numerics() {

}

// Function for user to select special character preference
function specialCharacter() {

}

// Generate and write the password 
function generatePassword() {
  passwordLength();
  lowerCase();
  upperCase();
  numerics();
  specialCharacter();
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
