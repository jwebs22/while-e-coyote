/*
-get input from user, prompt-sync
-while loop allows user to input
multiple numbers
-print out sum at the end
-variable to hold sum
- need += to add to our sum
- reprompt inside while loop
*/

const prompt = require('prompt-sync')({sigint: true});

console.log("Enter some numbers you'd like added, type 0 when complete: ");
let num = Number(prompt('> '));
let sum = 0;

while (num > 0)
{
    sum += num;
    num = Number(prompt('> '));
}

console.log(`The sum of your numbers is ${sum}.`);

