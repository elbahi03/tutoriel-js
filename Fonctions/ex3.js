// Challenge 3 : Fonction de Maximum : 

function Max(a, b) {
    let message ;
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    }else {
        message = "sont egaux";
        return message ;
    }
}

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur de num 1 : "));
let num2 = Number(prompt("valeur de num 2 : "));

console.log("le maximum entre deux nombres : "+ Max(num1 , num2));


