let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price, image) {
    const item = { name, price, image };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="product-card">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button class="btn" onclick="removeFromCart(${index})" style="background:red">Remove</button>
        </div>
    `).join('');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

window.onload = updateCartCount;