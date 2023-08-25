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
    return ;
  } 
  else { 
    alert(" you want "  + length +  " characters password");
  }
  var wantLowerCase = confirm("You want to include lowercase letters?");
  var wantUpperCase = confirm("You want to include uppercase letters?");
  var wantNumbers = confirm("You want to include numbers?");
  var wantSpecialCharacters = confirm("You want to include special characters?");

  if ( !wantLowerCase && !wantUpperCase && !wantNumbers && !wantSpecialCharacters) {
    alert("Please choose at least one!");
    return;
} 
var characters = "";
  if (wantLowerCase ) characters +=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (wantUpperCase ) characters +=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if (wantNumbers ) characters +=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (wantSpecialCharacters) characters +=['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

  var result = "";
    for (var i = 0; i < characters.length; i++) {
      var index = Math.floor(Math.random() * characters.length);
      result = characters[index];
    } 
    return result; 
  };