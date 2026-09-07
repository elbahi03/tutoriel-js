// Challenge 1 : Tri à Bulles

var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}

console.log({nums})

for( let i= 0 ; i < num ; i++ ){
    for ( j=0 ; j<num-i ; j++){
        if ( nums[j] > nums[j+1]){
            let a = nums[j] ;
            nums[j] = nums[j+1];
            nums[j+1] = a
        }
    }
} 
console.log({nums})