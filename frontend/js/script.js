const dishes = [
      {
        id: 1,
        name: "Макароны",
        description: "Калории: 158<br>Белки: 5.8 г<br>Жиры: 2.5 г<br>Углеводы: 31 г",
        price: 450,
        image: "https://img.freepik.com/premium-photo/penne-alla-vodka-pasta-without-sauce_172134-510.jpg?size=626&ext=jpg"
      },
      {
        id: 2,
        name: "Пельмени",
        description: "Калории: 275<br>Белки: 12 г<br>Жиры: 14 г<br>Углеводы: 24 г",
        price: 550,
        image: "https://image.mel.fm/i/J/J3TjHMqOnK/1200.jpg"
      },
      {
        id: 3,
        name: "Суп",
        description: "Калории: 85<br>Белки: 3.2 г<br>Жиры: 4.1 г<br>Углеводы: 9 г",
        price: 890,
        image: "https://avatars.mds.yandex.net/get-entity_search/5485905/1223038767/S600xU_2x"
      },
      {
        id: 4,
        name: "Бутерброды",
        description: "Калории: 210<br>Белки: 7 г<br>Жиры: 10 г<br>Углеводы: 22 г",
        price: 320,
        image: "https://avatars.mds.yandex.net/i?id=dd922e462e7facc468369e451a7d0fb033205fa7-11416510-images-thumbs&n=13"
      },
      {
        id: 5,
        name: "Шоколадка",
        description: "Калории: 546<br>Белки: 4.9 г<br>Жиры: 32 г<br>Углеводы: 61 г",
        price: 320,
        image: "https://imgproxy.kuper.ru/imgproxy/size-1646-1646/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjUwL29yaWdpbmFsLzEvMjAyNS0xMC0zMSUyMDA4JTNBNTclM0EyNi45NzY4ODQlMkIwMCUzQTAwLzM2MjUwXzEuanBn.avif"
      },
      {
        id: 6,
        name: "Наггетсы",
        description: "Калории: 287<br>Белки: 11 г<br>Жиры: 12 г<br>Углеводы: 31 г",
        price: 320,
        image: "https://avatars.mds.yandex.net/i?id=85ca203ff746dd560601eb3746034acd_l-5590531-images-thumbs&ref=rim&n=13&w=827&h=619"
      }
    ];

        let cartItems = JSON.parse(localStorage.getItem("EatToday")) || [];
        const cartCountElement = document.getElementById('cart-count');
        const dishesContainer = document.getElementById('dishes-container');

        document.getElementById('cart').addEventListener('click', () => {
          window.location.href = 'statistics.html';
        });


        function addCard(dishId) {
          const dish = dishes.find(d => d.id === dishId);
          cartItems.push(dish);
          localStorage.setItem("EatToday", JSON.stringify(cartItems));
        }


        function renderDishes() {
            dishesContainer.innerHTML = '';
            
            dishes.forEach(dish => {
                const dishElement = document.createElement('div');
                dishElement.classList.add('dish-card');

                dishElement.innerHTML = `
                    <div class="dish-image">
                    <img src="${dish.image}">
                    </div>
                    <div class="dish-info">
                        <h3 class="dish-name">${dish.name}</h3>
                        <p class="dish-description">${dish.description}</p>
                        <button class="add-btn" data-id="${dish.id}">Добавить</button>
                    </div>
                `;

                let button = dishElement.querySelector('.add-btn')
                button.addEventListener('click', function() {
                  addCard(dish.id)
                })

                dishesContainer.appendChild(dishElement)

                
            });
        }

        renderDishes()
