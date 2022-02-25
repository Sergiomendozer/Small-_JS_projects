// node rads_to_degrees.js
function rads_to_degrees(rad) {
  degree = rad * (180 / Math.PI);
  var str_degree = degree.toString();
  //   var find_dot = ".";
  var place = str_degree.indexOf(".");
  place += 3;
  str_degree = str_degree.substring(0, place);

  console.log(`${str_degree} degrees`);
}

// formula 4 problem: 1rad × 180/π = 57.296°
const prompt = require("prompt-sync")({ sigint: true });
let rad = parseInt(prompt("Convert your radians to degrees: "));
rads_to_degrees(rad);
