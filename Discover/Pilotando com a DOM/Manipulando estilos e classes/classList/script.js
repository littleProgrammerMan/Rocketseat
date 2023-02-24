// Alterando estilos
// classList

// capturando o elemento body e atribuindo ao element
const element = document.querySelector('body');

// adicionando duas classes ao elemento element
element.classList.add('active', 'green');

// exibindo a list de classes da variável element
console.log(element.classList);

// element.classList.remove('active');

// aqui utilizamos o metodo "toggle" que funciona como um interruptor, onOff, se tem ele remove, se não tem ele adiciona
element.classList.toggle('active');