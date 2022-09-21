const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number into the Number Doubler: "));

while (num <= 100)
{
    num *= 2;
    console.log(num);
}