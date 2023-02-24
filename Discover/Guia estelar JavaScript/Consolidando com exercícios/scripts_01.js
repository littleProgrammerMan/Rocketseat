/*
    ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima   -   A
    * entre 80 - 89     -   B
    * entre 70 - 79     -   C
    * entre 60 - 69     -   D
    * menor que 60      -   F
*/

// const notas = (nota) => {
//     if(nota >= 90) {
//         console.log('A');
//     } else if(nota >= 80 && nota <= 89) {
//         console.log('B');
//     } else if(nota >= 70 && nota <= 79) {
//         console.log('C');
//     } else if(nota >= 60 && nota <= 69) {
//         console.log('D');
//     } else {
//         console.log('F');
//     }
// }

// let nota = 0;
// notas(nota);

let result = 'Indefinido';

function getScore(score) {

    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;
    
    if (scoreA) {     
        result = 'A';
    } else if (scoreB) {
        result = 'B';
    } else if (scoreC) {
        result = 'C';
    } else if (scoreD) {
        result = 'D';
    } else if (scoreF) {
        result = 'F';
    } else {
        result = 'Indefinido';
    }

    return result;
}

console.log(getScore(101));
console.log(getScore(-1));
console.log(getScore(0));
console.log(getScore(1));
console.log(getScore(45));
console.log(getScore(60));
console.log(getScore(61));
console.log(getScore(75));
console.log(getScore(85));
console.log(getScore(95));