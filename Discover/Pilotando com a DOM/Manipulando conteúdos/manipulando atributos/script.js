// Manipulando elementos
// Atributos

// selecionando o elemento header
const header = document.querySelector('header');
// adicionando um ID para o header
header.setAttribute('id', 'header');

// selecionando o elemento header novamente, mas agora pelo seu ID
const headerID = document.querySelector('#header');

// console.log(headerID);

// exibindo o ID do header
console.log(headerID.getAttribute('id'));           

// aqui removemos o atributo ID
header.removeAttribute('id');