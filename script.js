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
/* made a function that asks for password length using prompt and alert to confirm.
made it that it only accepts a number of from 8 to 128 no letters and no empty spaces.*/
function generatePassword () {
  var length = parseInt(window.prompt("How long do you want the password to be between 8 and 128?"));
  if ( isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128");
    return;
  } 
  else { 
    alert(" you want "  + length +  " characters password");
  }
};