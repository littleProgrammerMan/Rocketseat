// Eventos

const h1 = document.querySelector('h1');

h1.onclick = print;

function print() {
    console.log('print');
}

// aqui o javascript apresenta um corpotamento que desconsidera o que foi apresentado antes e considera sempre a ultima que ele encontrar.

h1.onclick = function() {
    console.log('outro momento');
}   

// Recomendado o uso do addEventListener, porque ele vai empilhar as funcionalidades.