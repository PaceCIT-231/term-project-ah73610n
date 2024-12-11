/* script.js */
const cart = [];

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));

        cart.push({ name, price });
        updateCart();
    }
});

// Handle checkout form submission
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('checkoutForm').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    });
}
