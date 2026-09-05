// Challenge 3 : Passage d'un Objet en Argument
function Air (a,b){
    return a*b ;
}

let rectongle = {
    longueur: 8,
    largeur: 4
}

console.log(" l'aire du rectangle : " + Air(rectongle.longueur, rectongle.largeur))