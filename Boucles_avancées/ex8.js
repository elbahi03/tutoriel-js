// Challenge 8 : Recherche Dichotomique

var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : "));
let table = [ 1 , 2, 5, 8, 12, 14, 17, 19, 20 ];

let debut = 0
let fin = table.length-1;

while (debut <= fin) {
    let milieu = Math.floor((debut+fin)/2) ;

    if ( table[milieu] == num ){
        console.log(table[milieu] + " in "+ milieu);
        break ;     
    }else if ( table[milieu] < num ){
        debut = milieu +1 ;
    }else {
        fin = milieu - 1 ;
    }
}





