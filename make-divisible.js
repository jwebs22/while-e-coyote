const prompt = require('prompt-sync')({sigint: true});

console.log("Enter a number for x:");
let x = Number(prompt("> "));
console.log("Enter a number for y:");
let y = Number(prompt("> "));

while (x % y != 0)
{
    console.log(x);
    x += 1; 
}

console.log(`${x} is divisible by ${y}.`);

