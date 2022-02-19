// node rads_to_degrees.js
function rads_to_degrees(rad)
{
    console.log(rad)
}

// formula 4 problem: 1rad × 180/π = 57.296°
const prompt = require("prompt-sync")({ sigint: true });
let rad = prompt("Convert your radians to degrees: ");
// parseint()
rads_to_degrees(rad)