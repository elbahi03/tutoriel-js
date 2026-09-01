// Challenge 8 : Mention Obtenue :

var prompt = require('prompt-sync')();

let note = Number(prompt("votre note : "));
if ( note < 10 ){
    console.log(" tu es recalé");
}else if ( note >= 10 && note < 12 ){
    console.log(" vous obtiez la mention passable.");
}else if ( note >= 12 && note < 14 ){
    console.log(" vous obtiez la mention assiez bien.");
}else if ( note >= 14 && note < 16 ){
    console.log(" vous obtiez la mention bien.");
}else if ( note >= 16 && note <= 20 ){
    console.log(" vous obtiez la tres bien.");
}