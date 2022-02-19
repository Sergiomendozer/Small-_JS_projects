// node hide_credit_card.js
function hide_credit_card_number(credit_card_number)
{
    var multiple_covers= '*'.repeat(3);
    console.log(multiple_covers + credit_card_number[5,2]);
}

const prompt = require("prompt-sync")({ sigint: true });
let credit_card_number = prompt("Enter credit card number:");
hide_credit_card_number(credit_card_number)