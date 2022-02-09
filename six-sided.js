const prompt = require('prompt-sync')();

Number(prompt("Hit enter to roll the dice"));

let x = Math.ceil(Math.random() * 6);
console.log("Result:", x);