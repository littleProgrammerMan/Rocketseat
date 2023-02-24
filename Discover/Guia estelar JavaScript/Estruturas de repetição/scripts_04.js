// for...in - ele vai criar um loop em cima de um objeto, pegando as propriedades

let person = {
    name: 'John',
    age: 26,
    weight: 92.2,
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}