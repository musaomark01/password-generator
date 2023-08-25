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
  /* made it that the user get asked if they want lowercase, uppercase, numbers, and special characters the user can answer with okay or cancel */ 
  var wantLowerCase = confirm("You want to include lowercase letters?");
  var wantUpperCase = confirm("You want to include uppercase letters?");
  var wantNumbers = confirm("You want to include numbers?");
  var wantSpecialCharacters = confirm("You want to include special characters?");
  
  /* if the user choose none they will git an alert to choose at least one.*/
  if ( !wantLowerCase && !wantUpperCase && !wantNumbers && !wantSpecialCharacters) {
    alert("Please choose at least one!");
    return;

  /*made an object to that has lowercase, uppercase, numbers, and special characters if the user responded with okay for any of the confirm questions to add to the charaters object. */   
} 
var characters = "";
   if (wantLowerCase ) characters +='abcdefghijklmnopqrstuvwxyz';
  if (wantUpperCase ) characters +='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (wantNumbers ) characters +='0123456789';
  if (wantSpecialCharacters) characters +='`~!@#$%^&*()-_=+[]{};:,.<>|/?';
    /* for the length of the password that the user chose randomly select characters from the characters object. */
  var result = "";
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * characters.length);
      result += characters[index];
    } 
    return result; 
  };
