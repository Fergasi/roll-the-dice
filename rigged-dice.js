const prompt = require('prompt-sync')();

let sides = Number(prompt("Enter the number of sides you would like your dice to have before rolling: "));
let riggednum = Number(prompt("Enter a number to rig your dice: "));

let x = Math.ceil(Math.random() * sides);
let y = Math.random();

if (y < 0.333333) {

    console.log("Result:", x);
}

if (y > 0.333333) {

    console.log("Result:", riggednum);
}
