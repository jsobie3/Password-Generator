// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  passLower: 'abcdefghijklmnopqrstuvwxyz',
  passUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  passNumber: '0123456789',
  passSymbol: "!#$%&'()*+,-./:;<=>?@[^_`{|}~",
};

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){ 
  var passGiven = ''
  window.alert("Would you like to create a password?");
  var passwordLength = parseInt(window.prompt("Your password must be between 8 and 128 characters"));
  if (passwordLength < 8 || passwordLength > 128)
  {
    window.alert(`Password must be between 8 and 128 characters.`)
    return null;
  }
  
  var passLower = window.confirm("would you like Lowercase characters in your password?");
  if (passLower) {passGiven += characters.passLower}
  var passUpper = window.confirm("would you like Uppercase characters in your password?");
  if (passUpper) {passGiven += characters.passUpper}
  var passNumber = window.confirm("would you like Numbers in your password?");
  if (passNumber) {passGiven += characters.passNumber}
  var passSymbol = window.confirm("would you like Symbols characters in your password?");
  if (passSymbol) {passGiven += characters.passSymbol}

  console.log(passGiven)
  var password = ""
  for (let i = 0; i < passwordLength; i++){
    password += passGiven [Math.floor(Math.random() * (passGiven.length))];
  }

  return password;

}