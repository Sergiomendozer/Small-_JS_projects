// node hide_credit_card.js
function hide_credit_card_number(credit_card_number)
{
    var multiple_covers= '*'.repeat(12);
    var hidden_credit_card_number = credit_card_number.substring(12,17)
    console.log(multiple_covers + hidden_credit_card_number);
    // document.write(hidden_credit_card_number)
}

const prompt = require("prompt-sync")({ sigint: true });
let credit_card_number = prompt("Enter credit card number:");
hide_credit_card_number(credit_card_number)