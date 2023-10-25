import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let strStorage = localStorage.getItem('feedback-form-state');
if (strStorage) {
    form.email.value = JSON.parse(strStorage).email ?? '';
    form.message.value = JSON.parse(strStorage).message ?? '';
}

form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);

function inputHandler(e) {
    strStorage = localStorage.getItem('feedback-form-state');
    const objStorage = strStorage ? JSON.parse(strStorage) : {};
    if (e.target.name === 'email')
        objStorage.email = e.target.value;
    if (e.target.name === 'message')
        objStorage.message = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(objStorage));
}

function submitHandler(e) {
    e.preventDefault();
    if (!localStorage.getItem('feedback-form-state')) return;
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    form.email.value = '';
    form.message.value = '';
}

