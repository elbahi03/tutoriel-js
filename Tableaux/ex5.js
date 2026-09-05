// Challenge 5 : Trouver le Minimum

// Challenge 4 : Trouver le Maximum

var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}
let min = nums[0];

for (let i = 0; i < num; i++) {
    if ( nums[i] < min){
        min = nums[i] ;
    }
}

console.log("le min est : "+ min)