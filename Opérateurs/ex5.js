// Challenge 5 : Conversion de Secondes :

var prompt = require('prompt-sync')();
let secondes = Number(prompt("secondes : "));

let heures , munites ;

// math.floor pour prend part int de number : 

heures = Math.floor(secondes / 3600) ;
let rest = secondes % 3600 ;
munites = Math.floor(rest / 60) ;
secondes = rest % 60 ;

console.log({heures});
console.log({munites});
console.log({secondes});
