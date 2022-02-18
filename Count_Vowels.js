// node Count_Vowels.js//
function Count_Vowels(string)
{let count = 0;
    for (var i = -1; i <= string.length; i += 1)
    {if (string[i] == "a" || string[i] == "A") {count +=1}
    else if (string[i] == "e" || string[i] == "E") {count +=1}
    else if (string[i] == "i" || string[i] == "I") {count +=1}
    else if (string[i] == "o" || string[i] == "O") {count +=1}
    else if (string[i] == "u" || string[i] == "U") {count +=1}
    }
count = String(count)
console.log(`${string} has ${count} vowels`); 
}


// prompts user for input
const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("Enter a word of sentence, and I will count number of vowels:");
Count_Vowels(input)

// 