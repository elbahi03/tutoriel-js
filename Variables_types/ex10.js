// Challenge 10 : Volume d'une sphère :

var prompt = require('prompt-sync')();

let rayon = Number(prompt("valeur de rayon : "));
let Volume = (4/3) * Math.PI * (rayon**3) ;

console.log("le volume d'une sphère : ");
console.log(Volume);

