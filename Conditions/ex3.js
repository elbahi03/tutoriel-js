// Challenge 3 : Somme de Deux Valeurs :
var prompt = require('prompt-sync')();

let A = Number(prompt("nombre A :"));
let B = Number(prompt("nombre B :"));

if ( A == B ){
    let resultat = (A+B)*3 ;
    console.log({resultat});
}else {
    let resultat = (A+B) ;
    console.log({resultat});
}