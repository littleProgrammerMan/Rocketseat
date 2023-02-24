// Eventos

const h1 = document.querySelector('h1');

// função - ovidor de eventos
h1.addEventListener('click', print);

function print() {
    console.log('print');
}