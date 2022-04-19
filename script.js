// Assignment Code - declare all needed variables
var generateBtn = document.querySelector("#generate");



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
