// Challenge 8 : Fonction de Vérification de Parité

function pair(a){
    if( a % 2 == 0){
        return true ;
    }else {
        return false ;
    }
}

var prompt = require('prompt-sync')();
let num = Number(prompt("valeur de num positif : "));

while ( num == NaN || num <0 ){
     num = Number(prompt("valeur de num positif : "));
}

console.log("pair : "+ pair(num));