let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    // Ocultar todos los textos
    document.querySelectorAll('.carousel-caption').forEach((caption) => {
        caption.style.opacity = 0;
    });

    // Mostrar el texto correspondiente al slide actual
    const currentCaption = slides[index].querySelector('.carousel-caption');
    if (currentCaption) {
        currentCaption.style.opacity = 1;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);
