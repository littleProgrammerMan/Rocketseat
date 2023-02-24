// Adicionando elementos
// criamos um elemento
const div = document.createElement('div');
// populamos ele
div.innerText = "Olá Devs!";

// insertBefore
// selecionando elemento pai
const body = document.querySelector('body');
// selecionando elemento de referência dentro do body
const script = body.querySelector('script');
// primeiro parametro é o elemento novo
// segundo parametro é o elemento de referência
// e tudo dentro do elemento pai
// logo adicionamos um elemento div novo antes do elemento script
body.insertBefore(div, script);

// agora vamos fazer o inverso, como se fosse insertAfter
// buscando nossa refêrencia
const header = body.querySelector('header');
// e aqui adicionamos o elemento div após o header
body.insertBefore(div, header.nextSibling);
