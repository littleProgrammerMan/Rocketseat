/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + ' está andando';
    }
}
const victor = new Person('Victor');
const mayk = new Person('Mayk');

console.log(victor.walk());
console.log(mayk.walk());

// exemplos de funções contrutoras já existentes no JavaScript

let name = new String('Victor');
console.log(name);

let date = new Date('2022-11-20');
console.log(date);