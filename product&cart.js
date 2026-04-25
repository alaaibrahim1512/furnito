
window.onload = function() {
    let cart = JSON.parse(localStorage.getItem('furniro_cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
};