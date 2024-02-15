// HOME JS Project 1 - 
// Colours array with 6 values
const colours = ["Red", "Yellow", "Blue", "Orange", "Green", "Purple"];


// Declaring variables to pull from html into the DOM
const btn = document.getElementById("btn");
const color = document.querySelector(".colour");
const nav = document.getElementById("navbar");

// Add an event listener to the button which when clicked will execute a function
btn.addEventListener("click", function() {
// Get random number between 0-5 colors
const randomNumber = getRandomNumber();


// Show what the random number is in the console.
console.log(randomNumber);

// This sets the background colour to that of the code selected
document.body.style.backgroundColor = colours[randomNumber]; 
 color.innerText = colours[randomNumber];
});

// This selects a random number to be used as an index to select a character from the colours array. 
// It returns a random integer between 0 and the length of the hex array. 
// Math.floor rounds the number so it is not a decimal number.
function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}
