document.getElementById('cart').addEventListener('click', () => {
          window.location.href = 'index.html';
});

document.getElementById('cartDelete').addEventListener('click', () => {
          localStorage.clear();
});

let cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];
console.log(cartItems)
