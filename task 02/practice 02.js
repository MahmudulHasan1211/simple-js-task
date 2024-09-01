// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bengali of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var mathematics = parseFloat (72.25);
var biology = 65;
var chemistry = 80;
var physics = parseFloat (35.45);
var bengali = parseFloat (99.50);

var totalMarks = mathematics + biology + chemistry + physics + bengali;
console.log(totalMarks)

var avgMarks = totalMarks / 5;
console.log(avgMarks.toFixed(2))


