// Created variables for the needed elements on the page.

var generate = document.querySelector("#generate")
var password = document.getElementById("password");
var chars = ["0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKL"]
var passwordLength = 12;
var password = "";
// created a function to generate the password. On loading the page, the prompt shows up.
function writePassword() {
  var generate = window.prompt("Please press OK to confirm request");
// integer function for random generation using several variables created above.
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
// if the user cancels, the page resets
  if (!userChoice) {
    return;
  }
// this should create the password prompt but is not functioning.
  var password = window.prompt("");
};
// This code launches the function to the site.
writePassword();