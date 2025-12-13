document.getElementById('cart').addEventListener('click', () => {
          window.location.href = 'index.html';
});

document.getElementById('cartDelete').addEventListener('click', () => {
    localStorage.removeItem("EatToday"); 
    location.reload(); 
});

let cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];

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

       const desc = item.description;

       const calMatch = desc.match(/Калории:\s*(\d+)/);
       const protMatch = desc.match(/Белки:\s*([\d.]+)/);
       const fatMatch = desc.match(/Жиры:\s*([\d.]+)/);
       const carbMatch = desc.match(/Углеводы:\s*([\d.]+)/);

       if (calMatch) totalCal += parseInt(calMatch[1]);
       if (protMatch) totalProt += parseFloat(protMatch[1]);
       if (fatMatch) totalFat += parseFloat(fatMatch[1]);
       if (carbMatch) totalCarb += parseFloat(carbMatch[1]);
              
    })
}

totalCaloriesEl.textContent = `Калории: ${totalCal} ккал`;
totalProteinEl.textContent = `Белки: ${totalProt.toFixed(1)} г`;
totalFatEl.textContent = `Жиры: ${totalFat.toFixed(1)} г`;
totalCarbsEl.textContent = `Углеводы: ${totalCarb.toFixed(1)} г`;
