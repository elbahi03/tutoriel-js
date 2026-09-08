var prompt = require('prompt-sync')();
// functions : 

// function de recherche :
function recherche(text, sou_text) {
    let mot;
    let trouve = false;
    for (let i = 0; i <= text.length; i++) {
        mot = "";
        for (let j = 0; j <= sou_text.length - 1; j++) {
            mot += text[i + j];
        }
        if (mot === sou_text) {
            trouve = true;
            break;
        }
        mot = "";
    }

    return trouve;
}

let apprenants = [
    {
        Prenom: "Yassine",
        Note: 20
    },
    {
        Prenom: "Anas",
        Note: 15
    }
];

console.log(`
     Menu de Gestion des apprenants :
     1. Ajouter :
     2. Afficher :
     3. Rechercher :
     4. mettre a jour :
     5. Supprimer :
     0. Quitter :
    `);

let choix = Number(prompt("choix : 1, 2, 3, 4, 5, 0 :"));

switch (choix) {
    case 1:
        console.log("Ajouter un apprenants :");
        console.log("remplir les information :");
        let apprenant = {
            Prenom: prompt("Prenom : "),
            Note: Number(prompt("note : "))
        };
        apprenants[apprenants.length] = apprenant;
        console.log("Ajouter un apprenants est complet .")
        break;
    case 2:
        console.log("tous les apprenants enregistres : ");
        for (i = 0; i < apprenants.length; i++) {
            console.log(`apprenant ${i} :
        * Prenom : ${apprenants[i].Prenom} .
        * Note : ${apprenants[i].Note}
                `)
        }
        break;
    case 3:
        console.log("Rechercher un apprenant : ");
        let Rechercher = prompt("entrer prenom qui veux : ");
        for (i = 0; i < apprenants.length; i++) {
            let text = apprenants[i].Prenom;
            let trouve = recherche(text, Rechercher)
            if (trouve == true) {
                console.log(`apprenant ${i} :
    * Prenom : ${apprenants[i].Prenom} .
    * Note : ${apprenants[i].Note}
            `)
            }
        }
        break;

}