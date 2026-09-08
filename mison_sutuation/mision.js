// let array = [10,20,20,0,15];

// let max_two = [];
// let max = array[0];
// for(let i = 1 ; i< array.length ; i++){
//     if ( array[i]>max){
//         max_two = max ; 
//         max = array[i];
//     }
//     if (array[i]>max_two && array[i]<max ){
//         max_two = array[i];
//     }

// }

// console.log(max_two)

function kawasim(a, b) {
    let t = []
    let min;
    if (a > b) {
        min = b;
    } else {
        min = a;
    }
    for (i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            t.push(i);
        }
    }
    return t;
}

console.log(kawasim(18, 24))