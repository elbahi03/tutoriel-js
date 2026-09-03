// Challenge 6 : Fonction de Fibonacci

function Fibonacci(a){
    let var1 = 0, var2=1, somme=0;
    for(let i=2 ; i<=a ; i++){
        somme = var1 + var2 ;
        var1 = var2 ;
        var2 = somme ;
    }
    return somme ;
}

var prompt = require('prompt-sync')();

let num = Number(prompt("valeur de num (n>=2) : "));

while ( num == NaN || num <=2 ){
     num = Number(prompt("valeur de num positif : "));
}

console.log("F("+ num +") = "+ Fibonacci(num));