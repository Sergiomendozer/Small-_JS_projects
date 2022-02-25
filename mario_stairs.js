// node mario_stairs.js
function mario_stairs(n) {
  var number_of_spaces = n - 1;
  for (var i = 1; i <= n; i += 1, number_of_spaces -= 1) {
    var steps = "#".repeat(i);
    var spaces = "  ".repeat(number_of_spaces);
    var stairs = spaces.concat(steps);
    console.log(stairs);
  }
}

const prompt = require("prompt-sync")({ sigint: true });
let n = parseInt(prompt("How many stairs would you like to build for mario: "));
mario_stairs(n);
