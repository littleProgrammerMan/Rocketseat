// function hoisting

sayMyName();
sayYourName();

// aqui não ocorre o hoisting
const sayMyName = function() {
    console.log('Victor');
}

// aqui já ocorre o hoisting
function sayYourName() {
    console.log('Mayk');
}