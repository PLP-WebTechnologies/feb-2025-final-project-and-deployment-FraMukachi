// Filter and Sort Logic
document.getElementById('category').addEventListener('change', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);

function filterProducts() {
  const category = document.getElementById('category').value;
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function sortProducts() {
  const sortBy = document.getElementById('sort').value;
  const productGrid = document.querySelector('.product-grid');
  const productCards = Array.from(document.querySelectorAll('.product-card'));

  productCards.sort((a, b) => {
    const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
    const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));

    if (sortBy === 'price-low') {
      return priceA - priceB;
    } else if (sortBy === 'price-high') {
      return priceB - priceA;
    }
  });

  productCards.forEach(card => productGrid.appendChild(card));
}