// Challenge 10 : Trouver un Sous-String

var prompt = require('prompt-sync')();

let text = prompt("entrer text  : ");
let sou_text = prompt("entrer sous-text  : ");
let mot ;
let trouve = false ;
for(let i = 0 ; i<= text.length ; i++ ){
    mot = "";
    for ( let j = 0 ; j<= sou_text.length-1 ; j++ ){
        mot += text[i+j];
    }
    if( mot === sou_text){
        trouve = true ;
        break ;
    }
    mot = "";
}

if (trouve == true){
    console.log("trouve")
}else {
    console.log("non trouve")
}