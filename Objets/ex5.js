// Challenge 5 : Objet et Fonction de Retour


let livre = {
    titre: "my life",
    auteur: "lm3alem",
    date: "10-12-2025",
    text() {
        return `bonjour , je suis ${this.auteur}, j'ecris ${this.titre} `;
    }
}

console.log(livre.text())