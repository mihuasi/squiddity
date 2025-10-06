(() => {
    const images = [
        '1_habits',
        '2_habits',
        '3_cal',
        '4_cal',
        '5_cal',
        '6_entry',
        '7_entry',
        '8_entry',
        '9_welcome'
    ];
    let currentIndex = 0;
    const carouselImage = document.querySelector('.carousel-image');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');

    function updateCarousel(index) {
        currentIndex = index;
        carouselImage.src = `images/screenshots/${images[index]}.jpeg`;
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % images.length;
        updateCarousel(newIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateCarousel(i);
        });
    });

    // Call this to load the first JPEG image on page load
    updateCarousel(0);
})();
