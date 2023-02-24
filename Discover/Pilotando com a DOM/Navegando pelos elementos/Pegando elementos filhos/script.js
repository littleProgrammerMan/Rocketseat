// Navegando pelos elementos
// childNodes children

const el = document.querySelector('body');

// aprendendo como pegar um elemento filho

// NodeList
console.log(el.childNodes);

// HTMLCollection
console.log(el.children);

// firstChild firstElementChild
// primeiro filho
console.log(el.firstChild);
// primeiro elemento filho
console.log(el.firstElementChild);

// lastChild lastElementChild
// ultimo filho
console.log(el.lastChild);
// ultimo elemento filho
console.log(el.lastElementChild);