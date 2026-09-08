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
     6. Afficher la moyenne de la classe :
     7. Afficher le meilleur et le moins bon apprenant :
     8. Trouver apprenant avec skill votre choix :
     0. Quitter :
    `);
    choix = Number(prompt("choix : 1, 2, 3, 4, 5, 6, 7, 0 : "));
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

// recherche avec prenom:
function Rechercher_prenom(prenom) {
    let index;
    for (i = 0; i < apprenants.length; i++) {
        if (prenom === apprenants[i].Prenom) {
            index = i;
            break;
        }
    }
    return index;
}

// function de recherche avancee :
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

// moyenne de classe :
function Moyenne() {
    let somme = 0;
    for (let i = 0; i < apprenants.length; i++) {
        somme += apprenants[i].Note
    }
    return somme / apprenants.length;
}

// function de min de note class :
function min_note() {
    let index = 0;
    let min = apprenants[0].Note
    for (let i = 0; i < apprenants.length; i++) {
        if (min > apprenants[i].Note) {
            index = i;
        }
    }
    console.log(`apprenant ${index} :
        * Prenom : ${apprenants[index].Prenom} .
        * Note : ${apprenants[index].Note}
                `)
}

// function de max de note class :
function max_note() {
    let index = 0;
    let max = apprenants[0].Note
    for (let i = 0; i < apprenants.length; i++) {
        if (max < apprenants[i].Note) {
            index = i;
        }
    }
    console.log(`apprenant ${index} :
        * Prenom : ${apprenants[index].Prenom} .
        * Note : ${apprenants[index].Note}
                `)
}

// function de recherche de skill :
function Skills(skill){
    for(i=0 ; i< apprenants.length ; i++){
        let trouve = false
        for(j=0; j< apprenants[i].skills.length ; j++){
            if( skill === apprenants[i].skills[j]){
                trouve = true
            }
        }
        if (trouve === true){
            console.log(`apprenant ${i} :
        * Prenom : ${apprenants[i].Prenom} .
        * Note : ${apprenants[i].Note} .
        * Skill : ${apprenants[i].skills}
                `)
        }
    }
}


// array of objet : apprenants
let apprenants = [
    {
        Prenom: "Yassine",
        Note: 20,
        skills: ["javascript", "next.js", "Dom"]
    },
    {
        Prenom: "Anas",
        Note: 15,
        skills: ["C", "C#"]
    },
    {
        Prenom: "ismail",
        Note: 15,
        skills: ["javascript"]
    },
    {
        Prenom: "isak",
        Note: 15,
        skills: ["php", "laravel", "blade"]
    },
    {
        Prenom: "amine",
        Note: 15,
        skills: ["javascript", "next.js", "Dom"]
    },
    {
        Prenom: "simo",
        Note: 15,
        skills: ["javascript", "next.js", "Dom"]
    }
];

let Quitter = false;

// code start :
while (Quitter === false) {
    choisir()
    switch (choix) {
        case 1:
            console.log("Ajouter un apprenants :");
            console.log("remplir les information :");
            let apprenant = {
                Prenom: prompt("Prenom : "),
                Note: Number(prompt("note : "))
            };
            let trouve = Rechercher_prenom(apprenant.Prenom)
            if (apprenant.Note >= 0 && apprenant.Note <= 20) {
                if (trouve === undefined) {
                    apprenants[apprenants.length] = apprenant;
                    console.log("Ajouter un apprenants est complet .")
                    Afficher();
                } else {
                    console.log(`PARDON ! , cette prenom : ${apprenant.Prenom}, deja trouve`)
                }
            }else{
                console.log(`PARDON ! , cette Note est impossible`)
            }
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
            let Index = Rechercher_prenom(Recherche);
            if (Index === undefined) {
                console.log("il n'a pas trouvee")

            } else {
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
            let index = Rechercher_prenom(Supprimer);
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
        case 6:
            console.log("la moyenne de la classe :")
            console.log("la moyenne generale : " + Moyenne().toFixed(2));
            break;
        case 7:
            console.log("le meilleur et le moins bon apprenant")
            console.log("le meilleur :")
            max_note();
            console.log("le moins :")
            min_note();
            break;
        case 8:
            console.log("apprenant avec skill votre choix : ")
            let skill = prompt("Skill IT qui veux rechercher : ")
            Skills(skill)
            break ;
        case 0:
            console.log("by by")
            Quitter = true
            break;
    }
}