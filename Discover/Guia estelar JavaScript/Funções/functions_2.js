// function expression
// function anonymous 

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 25;
// sum(number1, number2) // arguments - argumentos

console.log(`o número 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

// Outra forma de explicar como funciona o uso de funçoes

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + ' e ' + fruta2;
}

const copo = fazerSuco('banana','maça');

console.log(copo);