// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima ?
console.log(typeof weight);

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = "Victor";
let age = 18;
let stars = 5.5;
let isSubscribed = true;

/* 
    4. A variável student abaixo é de que tipo de dados ?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg. 
        
        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Victor",
    age: 18,
    weight: 74.8,
    isSubscribed: true,
};

console.log(typeof student);

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/*
    5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student];

console.log(students);

/*
    7. Coloque no console o valor da posição zero do array acima
*/

console.log(students[0]);

/*
    8. Crie un novo student e coloque na posição 1 do array students 
*/

const john = {
    name: "John",
    age: 32,
    weight: 57.3,
    isSubscribed: true,
}

students[1] = john;

console.log(students[1]);

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que ? Após sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1
*/

undefined;

/*
    10. Trocando o var pra let o que irá acontecer ?
*/

// a resposta é: variável não definida (erro de referência)