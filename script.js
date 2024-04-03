const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = button.dataset.price;
    // Simulate adding item to cart with price
    console.log(`Adding item to cart: Price: $${price}`);
    // Update cart section here (logic not included in this example)
  });
});

