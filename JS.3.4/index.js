// Problem 1
// Create a function called circleArea.
// This function will take one parameter which will be a radius.
// Return the area of the circle based on the radius.
// area is 3.14 * r^2
function circleArea(r) {
    area = (r*r) * 3.14;
    return area;
  }
  console.log(circleArea(3));




// Problem 2
// Create a function called circleCircumference.
// This function will take one parameter which will be a radius.
// Return the circumference of the circle based on the radius.
// circumference is 2 * 3.14 * radius
function circleCircumference(radius) {
    circumference = 2 * 3.14 * radius;
    return circumference;
  }
  console.log(circleCircumference(4));





// Problem 3
// Create a function called average.
// This function will take three parameters which will be numbers.
// Find the average of these numbers and return the value.
function average(a,b,c) {
    averages = ((a + b + c) / 3);
    return averages;
  }
  console.log(average(3,3,3));




// Problem 4
// Create a function called combineTwoStrings.
// This function will take two parameters.
// return both of the strings concatenated(combined)
function combineTwoStrings(start,end) {
    message = start + end;
    return message;
  }
  console.log(combineTwoStrings("Hello ","World"))



// Problem 5
// Create a function called cubed.
// This function will take one parameter.
// Return the cubed number that is given from the parameter.
function cubed(u) {
    ucube = (u * u * u);
    return ucube;
  }
  console.log(cubed(2))



// Problem 6
// Create a function called squared.
// This function will take one parameter.
// Return the squared number that is given from the parameter.
function squared(square) {
    meep = (square * square);
    return meep;
  }
  console.log(squared(4))



// Problem 7
// Create a function called sphereArea.
// This function will take one parameter which will be the radius.
// Find the surface area given the radius 4 * 3.14 * r^2
// Use your squared function to find the squared radius.
function sphereArea(rads) {
    radss = 4 * 3.14 * (rads * 2);
    return radss;
  }
  console.log(sphereArea(8))

