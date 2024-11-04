let currentSlide = 0;
const slides = document.querySelectorAll('#carouselImages img');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100; // Calcular el desplazamiento
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Regresar al último slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volver al primer slide
    }
    showSlide(currentSlide);
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Aumentar el índice
    showSlide(currentSlide);
}

// Cambiar automáticamente cada 5 segundos
setInterval(autoSlide, 5000);

function reservar(habitacion, precio) {
    const metodoPago = prompt("Seleccione el método de pago (Tarjeta, Efectivo):");
    if (metodoPago) {
        if (metodoPago.toLowerCase() === 'efectivo') {
            alert(`Gracias por reservar la ${habitacion}. Puede pagar en efectivo dentro de los próximos 2 días.`);
        } else {
            alert(`Gracias por reservar la ${habitacion}. Método de pago: ${metodoPago}. Por favor, ingrese sus datos de tarjeta.`);
            document.getElementById('modal-tarjeta').style.display = 'block'; // Mostrar el modal
        }
    } else {
        alert("Reserva cancelada.");
    }
}

function cerrarModal() {
    document.getElementById('modal-tarjeta').style.display = 'none'; // Ocultar el modal
    document.getElementById('modal-info').style.display = 'none'; // Ocultar el modal de información
}

function info(habitacion) {
    document.getElementById('modal-info').style.display = 'block'; // Mostrar el modal de información
    document.getElementById('habitacion-info').innerText = `Más información sobre la ${habitacion}.`;
}

function enviarInfo() {
    const contacto = document.getElementById('contacto-info').value;
    if (contacto) {
        alert(`La información sobre la ${document.getElementById('habitacion-info').innerText} será enviada a ${contacto}.`);
        cerrarModal(); // Cerrar el modal después de enviar la información
        document.getElementById('contacto-info').value = ''; // Limpiar campo
    } else {
        alert("Por favor, ingrese un correo electrónico o número de WhatsApp.");
    }
}

function completarRegistro() {
    const nombre = document.getElementById('nombre-titular').value;
    const numero = document.getElementById('numero-tarjeta').value;
    const fecha = document.getElementById('fecha-expiracion').value;
    const codigo = document.getElementById('codigo-seguridad').value;

    // Aquí puedes agregar lógica para procesar el pago

    alert(`Registro completado para ${nombre}.`);
    cerrarModal(); // Cerrar el modal después de completar el registro
    // Limpiar campos
    document.getElementById('nombre-titular').value = '';
    document.getElementById('numero-tarjeta').value = '';
    document.getElementById('fecha-expiracion').value = '';
    document.getElementById('codigo-seguridad').value = '';
}
