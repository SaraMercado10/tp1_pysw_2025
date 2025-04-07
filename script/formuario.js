// Obtener elementos del DOM
const form = document.getElementById('contact-form');
const spinnerContainer = document.getElementById('spinner-container');
const modal = document.getElementById('confirmation-modal');
const closeModalButton = document.getElementById('close-modal');

// Manejar el envío del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío predeterminado

    // Mostrar el spinner
    spinnerContainer.style.display = 'flex';

    // Simular el envío del formulario (puedes reemplazar esto con una llamada AJAX)
    setTimeout(() => {
        spinnerContainer.style.display = 'none'; // Ocultar el spinner
        modal.style.display = 'flex'; // Mostrar el modal de confirmación
    }, 2000); // Simulación de 2 segundos
});

// Cerrar el modal
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});