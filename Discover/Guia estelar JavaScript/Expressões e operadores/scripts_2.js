/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

// criando um objeto do tipo String
let name = new String('Mayk');
name.surName = "Brito";

// criando um objeto do tipo Number
let age = new Number(23);
console.log(name, age);

// criando um objeto do tipo Date
let data = new Date('2020-12-01');
console.log(data.__proto__);