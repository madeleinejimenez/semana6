// Seleccionar elementos interactivos
const ctaButtons = document.querySelectorAll('.cta');

// Añadir un evento al botón de llamada a la acción
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por tu interés en iniciar una recaudación!');
    });
});

