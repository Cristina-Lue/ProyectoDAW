function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Función para actualizar los precios
function updatePrices() {
    const rooms = document.querySelectorAll('.room');
    rooms.forEach(room => {
        const oldPriceElement = room.querySelector('s');
        const newPriceElement = room.querySelector('.room-info p:first-child');

        const oldPrice = parseFloat(oldPriceElement.textContent);
        const discount = 0.2; // 20% de descuento
        const newPrice = oldPrice - (oldPrice * discount);
        
        newPriceElement.textContent = `New price: $${newPrice.toFixed(2)}`;
        oldPriceElement.textContent = oldPrice; // Asegúrate de que el texto se mantenga
    });
}

// Llama a la función cuando se carga la página
window.onload = updatePrices;
