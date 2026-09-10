function radar(mot){
    for(i=0 ; i< mot.length/2 ; i++){
        if(mot[i] != mot[mot.length -1 -i]){
            return false
        }
    }
    return true
}

let mot = "aya" ;
let name = "yassine" ;
console.log(radar(mot))
console.log(radar(name))