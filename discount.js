// node discount.js
function discount(original_price, percentage_off)
{
    decimal = 100 - percentage_off 
    decimal = decimal/100
    new_price = original_price*decimal
    console.log(`The price went from $${original_price} to $${new_price}`)
}
    
const prompt = require("prompt-sync")({ sigint: true });
let original_price = parseFloat(prompt("Enter the original price: $"));
let percentage_off = parseFloat(prompt("What is the percentage off: "));
discount(original_price, percentage_off)
