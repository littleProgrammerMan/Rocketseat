const button = document.querySelector('#openModal');
const modal = document.querySelector('.modal-wrapper');   

button.onclick = function() {
    modal.classList.remove('invisible');
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        modal.classList.add('invisible');
    }
});

// links: https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction