// Operador Condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos 

// Café da manhã top
let pao = true;
let queijo = true;

const niceBreakFast = pao && queijo ? 'Café top!' : 'Café ruim!';

console.log(niceBreakFast);

// Maior de 18

let age = 16;
const canDrive = age >= 18 ? "Can Drive!" : "Can't Drive!";
console.log(canDrive);