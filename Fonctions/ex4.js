// Challenge 4 : Fonction de Minimum

function Min(a, b) {
    let message ;
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    }else {
        message = "sont egaux";
        return message ;
    }
}

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur de num 1 : "));
let num2 = Number(prompt("valeur de num 2 : "));

console.log("le min entre deux nombres : "+ Min(num1 , num2));


