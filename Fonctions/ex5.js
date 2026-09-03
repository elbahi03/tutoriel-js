// Challenge 5 : Fonction de Factorielle :

function Factorielle (a){
    let fac = 1 ;
    for(let i=1 ; i<=a; i++){
        fac *= i ;
    }

    return fac ;
}

var prompt = require('prompt-sync')();

let num = Number(prompt("valeur de num positif : "));

while ( num == NaN || num <=0 ){
     num = Number(prompt("valeur de num positif : "));
}

console.log(" la factorielle : "+ Factorielle(num));