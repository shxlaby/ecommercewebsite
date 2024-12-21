const carouselImages = [
    'home/motherboard.jpg',
    'home/smartwatch.jpg',
    'home/graphicCard.jpg'
];

let currentImageIndex = 0;
const carouselImg = document.querySelector('.carousel-img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

function updateCarousel() {
    carouselImg.src = carouselImages[currentImageIndex];
}

leftArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    updateCarousel();
});

updateCarousel();