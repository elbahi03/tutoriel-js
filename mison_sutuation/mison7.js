function supprimer(array, index){
    for(let i=0 ; i< array.length ; i++ ){
        console.log(array[i].id === index)
        if(array[i].id === index){
            for( let j= i ; j< array.length ; j++){
                array[j] = array[j+1]
            }
            break;
        }
    }
    array.length -- ;
    return array
}

let Data = [
    {
        id:1,
        name: "hossam"
    },
    {
        id:2,
        name: "yassine"
    },
    {
        id:3,
        name: "ali"
    },
    {
        id:4,
        name: "karim"
    },
    {
        id:5,
        name: "said"
    },
    
]

let supprimer_id = 3 ;

Data = supprimer(Data , supprimer_id)

console.log({Data})