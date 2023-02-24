/*

    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
         
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguindo do valor do saldo

*/

let familia = {
    receitas: [2200, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00, 2000],
}

function sum(array) {
let total = 0;
    
    for(let value of array) {
        total += value;
    }
    
    return total;
}

function calculateBalance(familia) {
    const calculoReceitas = sum(familia.receitas);
    const calculoDespesas = sum(familia.despesas);

    const total = calculoReceitas - calculoDespesas;

    const itsOk = total >= 0;

    let balanceText = "negativo";

    if(itsOk) {
        balanceText = "positivo";
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance(familia);