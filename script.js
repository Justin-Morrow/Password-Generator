// Assignment Code - declare all needed variables
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericsChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let length=0;
let includeLC=false;
let includeUC=false;
let includeNUM=false;
let includeSC=false;
// Create functions to fill out the critera
// Function to select password length
function passwordLength() {
length=parseInt (prompt (" Choose password length between 8 and 128 characters "));
console.log ("length: " , length);

if (Number.isNaN (length)) {
  alert ("Password length must be a number, please retry");
  return "password not generated";
}

if (length < 8) {
  alert ("passworth length has to be 8 characters or more");
  return "password not generated";
}

if (length > 128) {
  alert ("passworth length has to be 128 characters or less");
  return "password not generated";
}

}

// Function for user to select lower case preference
function lowerCase() {
includeLC=confirm ("Click OK to include lower case characters in password");
console.log ("includeLC: " + includeLC)
}
// Function for user to select upper case preference
function upperCase() {
  includeUC=confirm ("Click OK to include upper case characters in password");
  console.log ("includeUC: " + includeUC)
}

// Function for user to select number preference
function numerics() {
  includeNUM=confirm ("Click OK to include numbers in password");
  console.log ("includeNUM: " + includeNUM)
}

// Function for user to select special character preference
function specialCharacter() {
  includeSC=confirm ("Click OK to include special characters in password");
  console.log ("includeSC: " + includeSC)
}

// Generate and write the password 
function generatePassword() {
  passwordLength();
  lowerCase();
  upperCase();
  numerics();
  specialCharacter();
 

  if (
    includeLC == false &&
    includeUC == false &&
    includeNUM == false &&
    includeSC == false) {
      alert ("At least one character type needs to be selected. Try again.");
      return ("password not generated")
    }

    let possibleCharacters=[];
    if (includeLC) {
      possibleCharacters=possibleCharacters.concat (lowerCaseChar);

    }
    if (includeUC) {
      possibleCharacters=possibleCharacters.concat (upperCaseChar);
      
    }
    
    if (includeNUM) {
      possibleCharacters=possibleCharacters.concat (numericsChar);
      
    }
    if (includeSC) {
      possibleCharacters=possibleCharacters.concat (specialCharacterChar);
      
    }

    let generatedPassword="";
    let randomIndex=0;
    for (let i=0; i<length; i++) {
    randomIndex=Math.floor (Math.random () * possibleCharacters.length);
    generatedPassword += possibleCharacters [randomIndex];
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
