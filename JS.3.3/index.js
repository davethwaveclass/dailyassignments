// Problem 1
// We are going to create a function called addTwoNumbers
// It will take two parameters.
// Add the two parameters together and return the sum.

function addTwoNumbers(a, b) {
  // add the two parameters together into sum.
  let sum = a + b;
  console.log("Made it");
  // the return statement is important cause that is what we get back
  // when the function executes
  return sum;
}

console.log(addTwoNumbers(1,1))


// Problem 2
// Our function name is going to be perimeter.
// We will have two parameters. A width and a height.
// Find the perimeter and return that value.
// Perimeter is width + width + height + height

function perimeter(width, height) {
  let answer = (width * 2) + (height * 2);
  return answer;
}
console.log(perimeter(4,6))


// Problem 3
// The function name will be area.
// We will take two parameters. Width and height.
// Find the area and return that value.
// Area is width * height

function area(width, height) {
  let answer = width * height;
  return answer;
}
console.log(area(2,7))

// Problem 4
// The function name will be helloMessage.
// It will take one parameter which will be a persons name.
// Have it output "Hello (persons name)"

function helloMessage(name) {
  message = "Hello " + name;
  return message;
}
console.log(helloMessage("Dave"))
// Problem 5
// The function name will be favColor.
// It will take one parameter which will be a color.
// If the color is blue or red or green return "That is a great color!".
// If the color is yellow return "Just like the sun!".
// If it is any other color return "Great choice!".

function favColor(color) {
  if (color = "blue" ) {
    color = "That is a great color!"
  } else if (color = "red") {
    color = "That is a great color!"
  } else if (color = "green") {
    color = "That is a great color!"
  } else if (color = "yellow") {
    color = "Just like the sun!"
  } else {color = "Great Choice!"}
  return color;
}
console.log(favColor("areg"))