document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    function showSlide(index) {
        
        slideIndex = (index + totalSlides) % totalSlides;
       
        slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    const slideInterval = setInterval(nextSlide, 3000);

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
    });
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
    });

    
});
