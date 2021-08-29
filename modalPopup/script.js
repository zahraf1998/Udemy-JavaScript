const button = document.querySelector('#btn'),
modal = document.querySelector('.modal'),
close = document.querySelector('.close')

button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    modal.style.display = 'flex';
};

function closeModal(e) {
    modal.style.display = 'none';
}