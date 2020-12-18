var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);

// array of password variable values:
// special characters
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function askForOptions(){
  var length = parseInt(prompt("Enter desired password length. (must be between 8 and 128)"));
  if (isNaN(length)=== true || length < 8 || length > 128) {
    alert("Please select a valid number!");
    return;
  }
  var confirmSpecialCharacters = confirm("Would you like special characters in your password?");
  var confirmNumericCharacters = confirm("Would you like numbers in your password?");
  var confirmLowercasedCharacters = confirm("Would you like lower cased letters in your password?");
  var confirmUppercasedCharacters = confirm("Would you like upper cased letters in your password?");
  if (!confirmNumericCharacters && !confirmLowercasedCharacters && !confirmSpecialCharacters && !confirmUppercasedCharacters) {
    alert("Please select at least one character type!")
    return;
  }

  var options = {
    length, confirmSpecialCharacters, confirmNumericCharacters, confirmLowercasedCharacters, confirmUppercasedCharacters
  }
return options;


  //  if for 4 negative options
};

//function to generate password??
function generatePassword() {
  var options = askForOptions()
  console.log(options);
  var totalArray = [];
  var result = [];
  if(options.confirmLowercasedCharacters === true){
    totalArray = totalArray.concat(lowerCasedCharacters)
  }
  if(options.confirmUppercasedCharacters === true){
    totalArray = totalArray.concat(upperCasedCharacters)
  }
  if(options.confirmSpecialCharacters === true){
    totalArray = totalArray.concat(specialCharacters)
  }
  if(options.confirmNumericCharacters === true){
    totalArray = totalArray.concat(numericCharacters)
  }
  console.log(totalArray)
  for(var i = 0; i < options.length; i++){
    var index = Math.floor(Math.random() * totalArray.length)
    console.log(index);
    var digit = totalArray[index];
    console.log(digit)
    result.push(digit)
   


  }
return result.join("")
}