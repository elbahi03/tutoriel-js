// Challenge 4 : Equation du Deuxième Degré :

var prompt = require('prompt-sync')();

console.log("équation du deuxième degré: AX1+BX2+C :");

let A = Number(prompt("nombre A : "));
let B = Number(prompt("nombre B : "));
let C = Number(prompt("valeur C : "));

let delta = Math.pow(B,2)-4*A*C ;

if (delta < 0 ){
    console.log("il n'est pas solution .");
}
else if ( delta == 0 ){
    let resultat = (-B) / (2*A) ;
    console.log("il ya un seul solution : "+ resultat);
}
else if ( delta > 0 ){
    let resultat1 = (- B - Math.sqrt(delta) ) / (2 * A);
    let resultat2 = (- B + Math.sqrt(delta) ) / (2 * A);
    console.log("il y a deux solution pour cette equation : ");
    console.log({resultat1});
    console.log({resultat2});   
}