let currentIndex = 0;

function moveSlide(direction) {
    const track = document.getElementById('track');
    const slides = document.querySelectorAll('.carousel-container img');
    const totalSlides = slides.length;

    // Atualiza o índice
    currentIndex += direction;

    // Lógica de loop (voltar ao início ou ir ao fim)
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Move o container baseado no índice (ex: -100%, -200%)
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}