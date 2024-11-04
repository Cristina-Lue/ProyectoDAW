document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const formData = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        dui: document.getElementById('dui').value,
    };

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Inicio de sesión exitoso');
            // Redirigir a otra página o realizar otra acción
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión. Intenta nuevamente.');
    }
});
