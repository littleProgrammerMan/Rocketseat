// Eventos
// argumento event

const input = document.querySelector('input');

// aqui podemos observar todas as funções disponíveis para o event
// console.log(event);

input.onkeydown = function(event) {
    // aqui podemos capturar o valor do input
    console.log(event.currentTarget.value);
}