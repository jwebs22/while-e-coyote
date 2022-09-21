const prompt = require('prompt-sync')({sigint: true});

console.log("How many values of the Fibonacci Sequence would you like to see?");
let n = Number(prompt("Enter a value for 'n': "));

// we need to start with 0, then 1
// then we need to add the two most recent numbers in the sequence
// this gives us the next number
// reassign variables
// repeat n times.

let num0 = 0;
let num1 = 1;
let nextNum = 0;

let count = 0;

while (count < n)
{  
console.log(num0);         // starts w/0 first time thru
nextNum = num0 + num1;     // reassigns the next number by adding the previous 2
num0 = num1;               // reassigns num0 to the new num1
num1 = nextNum;            // reassigns num1 to = the new next number
count = count + 1;
} 












