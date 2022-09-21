const prompt = require('prompt-sync')({sigint: true});

let str = prompt("Enter a string: ");
let str2 = str;

while (str.length <= 10)
{
    console.log(str);
    str += str2
}
console.log(str); 
//^^you told us to add this when we went over the assignment
// it does make the abc example look like that one in the repostory
// but it gives us a final line of 11 a's in the "a" example
// just saying that is <=10 is correct, one of the examples is wrong

