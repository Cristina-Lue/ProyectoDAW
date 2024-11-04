let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 500; // Ajusta el ancho según tus necesidades
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Cambiar de slide automáticamente cada 6 segundos
setInterval(() => {
    moveSlide(1);
}, 4000);

// Mostrar la primera imagen
showSlide(currentSlide);
