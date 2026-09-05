// Challenge 10 : Rechercher un Élément

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableau = [];
let trouve = false

for (let i = 0; i < num; i++) {
    tableau[i] = Number(prompt("tableu  " + i + ": "));
}

let num_recherche = Number(prompt("number of shearch : "));

for (let element of tableau) {
    if (element == num_recherche) {
        trouve = true ;
        console.log("trouve")
        break
    }
}

if ( trouve == false ){
    console.log("non trouvee")
}