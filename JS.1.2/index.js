// 1) Subtract startDistance from endDistance and assign the result to distanceTraveled

let startDistance = 3;
let endDistance = 22;

let distanceTraveled = endDistance - startDistance;
console.log(distanceTraveled);

// 2) We need to figure out the area of my backyard to know exactly how much yard I have.
// The length of my yard is 15ft and the width of my yard is 100ft.
// Create variables for each and assign the result to a yardArea variable.
// Hint: Area is length times width.

let yardWidth = 100;
let yardLength = 15;

let yardArea = yardWidth * yardLength;
console.log(yardArea);

// 3) I would like to figure out my resting heart rate.
// To be accurate I should take my resting heart rate multiple times and find the average
// to get a more accurate result. The first heart rate was 60BPM
// the second was 63BPM and the third was 59BPM.
// Assign each of these numbers to variables and assign the average heart rate
// using each of these variables to the averageHeartRate variable.

let firstHeartRate = 60;
let secondHeartRate = 63;
let thirdHeartRate = 59;

let averageHeartRate = (firstHeartRate + secondHeartRate +thirdHeartRate) / 3;
console.log(averageHeartRate);
// 4) We have an order of operations error here. Add parenthesis so the result is 20.

let result = (2 + 3) * 4;

// 5) Another order of operations error. The result should be 60.

let result2 = (3 + 7) * (-4 + 10);
console.log(result2);