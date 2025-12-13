document.getElementById('cart').addEventListener('click', () => {
          window.location.href = 'index.html';
});

let cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];
console.log(cartItems)
