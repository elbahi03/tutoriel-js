// Challenge 9 : Calcul de la distance entre deux points dans un espace 3D :

var prompt = require('prompt-sync')();

let x1 = Number(prompt("valeur X1 : "));
let x2 = Number(prompt("valeur X2 : "));
let y1 = Number(prompt("valeur Y1 : "));
let y2 = Number(prompt("valeur Y2 : "));
let z1 = Number(prompt("valeur Z1 : "));
let z2 = Number(prompt("valeur Z2 : "));

let X = Math.pow(x2-x1, 2);
let Y = Math.pow(y2-y1, 2);
let Z = Math.pow(z2-z1, 2);

let Distance = Math.sqrt(X + Y + Z);

console.log("la distance entre deux points donnés dans un espace 3D : ");
console.log(Distance);

