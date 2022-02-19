// node discount.js
function discount(original_price, percentage_off)
{
    decimal = 100 - percentage_off 
    decimal = decimal/100
    console.log(decimal)
}
    
const prompt = require("prompt-sync")({ sigint: true });
let original_price = parseFloat(prompt("Enter the original price: $"));
let percentage_off = parseFloat(prompt("What is the percentage off: "));
discount(original_price, percentage_off)
