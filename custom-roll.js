const prompt = require('prompt-sync')();

let sides = Number(prompt("Enter the number of sides you would like your dice to have before rolling: "));

let x = Math.ceil(Math.random() * sides);
console.log("Result:", x);