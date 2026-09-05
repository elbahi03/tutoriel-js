// Challenge 6 : Multiplication des Éléments

var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}

let milt = Number(prompt("nombre de entier : "));


for (let i = 0; i < num; i++) {
    nums[i] *= milt;
    console.log("num(" + i + ") =" + nums[i]);
}
