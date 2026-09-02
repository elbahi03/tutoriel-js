// Challenge 4 : Comparaisons Strictes :

var prompt = require('prompt-sync')();

let A = Number(prompt("nombre A :"));
let B = Number(prompt("nombre B :"));

if ( A == B ) {
    console.log("egal");   
}else {
    if ( A  >B ){
        console.log("a big");
    }else {
        console.log("b big");     
    }
}