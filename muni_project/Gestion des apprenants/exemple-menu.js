var prompt = require('prompt-sync')();
// functions : 

// function of choix :
function choisir() {
    console.log(`
     Menu de Gestion des apprenants :
     1. Ajouter :
     2. Afficher :
     3. Rechercher :
     4. mettre a jour :
     5. Supprimer :
     0. Quitter :
    `);
    choix = Number(prompt("choix : 1, 2, 3, 4, 5, 0 : "));
}
// function afficher : 
function Afficher() {
    for (i = 0; i < apprenants.length; i++) {
        console.log(`apprenant ${i} :
        * Prenom : ${apprenants[i].Prenom} .
        * Note : ${apprenants[i].Note}
                `)
    }
}
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
// array of objet : apprenants
let apprenants = [
    {
        Prenom: "Yassine",
        Note: 20
    },
    {
        Prenom: "Anas",
        Note: 15
    },
    {
        Prenom: "ismail",
        Note: 15
    },
    {
        Prenom: "isak",
        Note: 15
    },
    {
        Prenom: "amine",
        Note: 15
    },
    {
        Prenom: "simo",
        Note: 15
    }
];

choisir()
while (true) {
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
            Afficher();
            break;
        case 2:
            console.log("tous les apprenants enregistres : ");
            Afficher();
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
        case 4:
            console.log("Mettre a jour la note d'un apprenant existant : ");
            let Recherche = prompt("entrer prenom qui veux : (full name) : ");
            let Index;
            for (i = 0; i < apprenants.length; i++) {
                if (Recherche === apprenants[i].Prenom) {
                    Index = i;
                    break;
                }
            }
            if (Index === undefined){
                                console.log("il n'a pas trouvee")

            }else {
                console.log(`apprenant ${Index} :
    * Prenom : ${apprenants[Index].Prenom} .
    * Note : ${apprenants[Index].Note}
            `)
                apprenants[Index].Note = prompt("modifier leur Note : ");
                console.log("modification ruessir")
                console.log(`apprenant ${Index} :
    * Prenom : ${apprenants[Index].Prenom} .
    * Note : ${apprenants[Index].Note}
            `)
            }
            break;
        case 5:
            console.log("Supprimer un apprenant par son prenom : ");
            let Supprimer = prompt("entrer prenom qui veux : (full name) : ");
            let index;
            for (i = 0; i < apprenants.length; i++) {
                if (Supprimer === apprenants[i].Prenom) {
                    index = i;
                    break;
                }
            }
            if (index === undefined) {
                console.log("il n'a pas trouvee")
            } else {
                for (i = index; i < apprenants.length; i++) {
                    apprenants[i] = apprenants[i + 1];
                }
                apprenants.length -= 1;
                console.log("supprimer est ruessir")
                Afficher();
            }
            break;
        case 0:
            console.log("by by")
            break;
    }
    if (choix === 0) {
        break;
    }
    choisir()
}