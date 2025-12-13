document.getElementById('cart').addEventListener('click', () => {
          window.location.href = 'index.html';
});

document.getElementById('cartDelete').addEventListener('click', () => {
          localStorage.clear();
});

let cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];
console.log(cartItems)

const cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];

const dishesList = document.getElementById('dishes-list');
const totalCaloriesEl = document.getElementById('total-calories');
const totalProteinEl = document.getElementById('total-protein');
const totalFatEl = document.getElementById('total-fat');
const totalCarbsEl = document.getElementById('total-carbs');

let totalCal = 0;
let totalProt = 0;
let totalFat = 0;
let totalCarb = 0;

if (cartItems.length === 0) {
   dishesList.innerHTML = '<li>Ничего не добавлено</li>';       
} else {
    cartItems.forEach(item => {
       const li = document.createElement('li');
       li.textContent = item.name;
       dishesList.appendChild(li)
    })
}
