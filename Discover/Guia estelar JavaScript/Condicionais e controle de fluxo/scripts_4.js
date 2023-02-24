// throw

function sayMayname(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório!';
    }
    console.log(name);
}

// try...catch
try {
    sayMayname('');
} catch(e) {
    console.log(e);
}

console.log('após ao try/catch');