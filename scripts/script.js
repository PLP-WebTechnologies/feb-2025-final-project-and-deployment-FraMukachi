//Add to cart
function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} add to cart!`);
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.cart-count').textContent = cart.length;
}

// Function Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all the fields.');
        event.preventDefault();
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Initializing Cart Count at Page Load
updateCartCount();