const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');

let cartCount = 0;

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});

