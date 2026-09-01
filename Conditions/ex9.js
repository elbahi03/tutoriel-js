// Challenge 9 : Vérification d'Alphabet

var prompt = require('prompt-sync')();

let car = prompt("entrez alphabet : ");

if( car.length != 1 ){
    console.log("is not alphabet");
}else {
    alpha = car.charCodeAt(0);
    if ( alpha >=65 && alpha <= 90 ){
        console.log("majuscule");     
    } else if ( alpha >= 97 && alpha <= 122 ){
        console.log("muniscule;")
    }else{
        console.log("is not a alphabet");    
    }
}