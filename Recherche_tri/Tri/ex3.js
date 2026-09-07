// Challenge 3 : Tri par Sélection

// var prompt = require('prompt-sync')();

// let nums = [];
// let num = Number(prompt("nombre de entier : "));

// for (let i = 0; i < num; i++) {
//     nums[i] = Number(prompt("N(" + i + ") = "));
// }

let nums = [1, 7, 4, 8, 0];
let num = nums.length;

console.log({ nums })

for (let j = 0; j < num; j++) {
    let cle_min = nums[j];
    let index;
    for (let i = j; i < num; i++) {
        if (nums[i] < cle_min) {
            cle_min = nums[i];
            index = i;
        }
    }
    if (index != undefined) {
        nums[index] = nums[j];
        nums[j] = cle_min;
    }
}
console.log({ nums })