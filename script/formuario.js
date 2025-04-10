const form = document.getElementById('contact-form');
const spinnerContainer = document.getElementById('spinner-container');
const modal = document.getElementById('confirmation-modal');
const closeModalButton = document.getElementById('close-modal');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    spinnerContainer.style.display = 'flex';
    setTimeout(() => {
        spinnerContainer.style.display = 'none';
        modal.style.display = 'flex';
    }, 2000);
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});