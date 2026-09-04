// Challenge 4 : Trouver le Maximum

var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}
let max = nums[0];

for (let i = 0; i < num; i++) {
    if ( nums[i] > max){
        max = nums[i] ;
    }
}

console.log("le max est : "+ max)