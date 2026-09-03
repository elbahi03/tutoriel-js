// Challenge 14 : Sélection de Sortie

var prompt = require('prompt-sync')();

let num = Number(prompt("jour : "));

let jours = [ "lundi", "mardi", "mercredi", "jeudi","vendredi", "samedi", "dimache"];

if ( num >=1 && num<=7 ){
    for(let i = num-1 ; i<7 ; i++ ){
        console.log(jours[i]);
    }
}