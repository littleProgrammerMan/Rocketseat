// Criando e adicionando elementos 

// createElement - criando um elemento div
const div = document.createElement('div');
// o elemento está vazio então vamos adicionar um texto a ele
div.innerText = 'Olá Devs!';

// append prepend - agora vamos adicionar o elemento criado a página agora
const body = document.querySelector('body');

// adicionando o elemento ao final da página
// body.append(div);

// adicionando o elemento antes de todos os elementos filhos
body.prepend(div);