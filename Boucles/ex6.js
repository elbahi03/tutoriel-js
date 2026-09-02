// Challenge 6 : Affichage des N Premiers Nombres Pair :

var prompt = require('prompt-sync')();

let A = Number(prompt("nombre A :"));

for (let i=1 ; i<=A ; i++ ){
    console.log(i*2);
}