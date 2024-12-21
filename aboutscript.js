// Smooth Scroll to Section
const scrollButtons = document.querySelectorAll('.scroll-btn');

scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

