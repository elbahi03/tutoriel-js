// Challenge 3 : Tri par Sélection

var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}

console.log({ nums })
let index;
for (let i = 0; i < num; i++) {
    let min = nums[i];
    console.log(i, min);
    for (let j = i + 1; j < num; j++) {
        console.log(j, nums[j])
        console.log(nums[j] < min)
        if (nums[j] < min) {
            min = nums[j];
            index = j;
            console.log(min);
        }
    }

    nums[index] = nums[i]
    nums[i] = min
    console.log(i, nums[i])
    console.log("-----------------")
}

console.log({ nums })