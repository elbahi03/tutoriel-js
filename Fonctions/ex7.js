// Challenge 7 : Fonction de Compte à Rebours :

function Rebours(a){
    for(let i = a ; i >=0 ; i-- ){
        console.log(i)
    }
}

var prompt = require('prompt-sync')();
let num = Number(prompt("valeur de num (n>=0) : "));

while ( num == NaN || num <0 ){
     num = Number(prompt("valeur de num positif : "));
}

Rebours(num);