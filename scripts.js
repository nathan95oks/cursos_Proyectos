document.addEventListener("DOMContentLoaded", function() {
    // Maneja la navegación por clic en los enlaces de los cursos
    const courseLinks = document.querySelectorAll('.course a');
    courseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = this.getAttribute('href');
        });
    });

    // Encuentra y maneja el formulario de inscripción
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Verifica la edad del usuario
            const ageInput = document.getElementById('age');
            const age = ageInput ? parseInt(ageInput.value, 10) : 0;
            if (age < 15) {
                alert('Debes tener al menos 15 años para inscribirte.');
                return false;
            }

            // Aquí podrías añadir una función para enviar los datos del formulario a tu servidor
            console.log('Formulario válido, procede a enviar los datos.');
            // Por ejemplo, podrías usar fetch() para enviar los datos
            // fetch('/api/submit-form', { method: 'POST', body: new FormData(form) })
            //     .then(response => response.json())
            //     .then(data => console.log(data))
            //     .catch(error => console.error('Error:', error));

            alert('Formulario enviado con éxito!');
            form.reset(); // Opcional: resetear el formulario después de enviar
            // window.location.href = 'confirmation.html'; // Redireccionar a una página de confirmación, si existe
        });
    }
});
