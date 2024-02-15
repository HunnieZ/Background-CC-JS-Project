// HEX JS Project 1 - 
// This array contains all characters in a hexadecimal colour code. 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// selects the element with the ID of btn
const btn = document.getElementById("btn");

// selects the class with the class of .colour
const color = document.querySelector(".colour");

// add an event listener to the button which when clicked will execute a function
btn.addEventListener("click", function () {

  // This detects the variable # which is the formation of a hexcolour
  let hexColour = "#";

  // In this instance the loop with run 6 times because of the 6 digits the hex code has
  for (let i = 0; i < 6; i++) {

  // This appends a random character from the hex array to the hexColour variable
  hexColour += hex[getRandomNumber()];
  }
  // console.log(hexColour);

  // This sets the text of the element with the class colour to the selected color code.
  color.innerText = hexColour;

  // This sets the background colour to that of the code selected
  document.body.style.backgroundColor = hexColour;
});
// This selects a random number to be used as an index to select a character from the hex array. It returns a random integer between 0 and the length of the hex array. math.floor rounds the number so it is not a decimal number.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}