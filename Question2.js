let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === index) indicator.classList.add('active');
    });

    currentIndex = index;
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showSlide(i));
});

showSlide(currentIndex);
