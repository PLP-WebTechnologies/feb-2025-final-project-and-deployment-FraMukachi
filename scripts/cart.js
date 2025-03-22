let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelector('.cart-count');

// Payment Modal
const paymentModal = document.getElementById('payment-modal');
const checkoutBtn = document.getElementById('checkout-btn');
const closeModal = document.querySelector('.close');

// Confirmation Modal
const confirmationModal = document.getElementById('confirmation-modal');
const closeConfirmationBtn = document.getElementById('close-confirmation');

// Display Cart Items
function displayCartItems() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });

  cartTotalElement.textContent = total.toFixed(2);
  cartCountElement.textContent = cart.length;
}

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Open Payment Modal
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty. Add some items before proceeding to checkout.');
    return;
  }
  paymentModal.style.display = 'block';
});

// Close Payment Modal
closeModal.addEventListener('click', () => {
  paymentModal.style.display = 'none';
});

// Close Confirmation Modal
closeConfirmationBtn.addEventListener('click', () => {
  confirmationModal.style.display = 'none';
  window.location.href = 'index.html'; 
});

// Handle Payment Form Submission
document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Simulate payment processing
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (!cardNumber || !expiryDate || !cvv) {
    alert('Please fill out all payment details.');
    return;
  }

  // Payment
  paymentModal.style.display = 'none';
  confirmationModal.style.display = 'block';

  // Clear the cart
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
});

// Initialize Cart Display
displayCartItems();