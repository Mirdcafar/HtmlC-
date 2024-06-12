let pizza = [
    {
        "id": 1,
        "img": "./src/assets/fr5.png",
        "name": "Spaghetti",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "dinner"
    },
    {
        "id": 2,
        "img": "./src/assets/fr6.png",
        "name": "Gnocchi",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "dinner"
    },
    {
        "id": 3,
        "img": "./src/assets/fr7.png",
        "name": "Rovioli",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "lunch"
    },
    {
        "id": 4,
        "img": "./src/assets/fr8.png",
        "name": "Penne Alla Vodak",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "lunch"
    },
    {
        "id": 5,
        "img": "./src/assets/fr9.png",
        "name": "Risoto",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "dessert"
    },
    {
        "id": 6,
        "img": "./src/assets/fr10.png",
        "name": "Splitza Signature",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
        "pricing": 12.05,
        "category": "drink"
    }
]

let list = document.querySelector(".list")
let basket = document.querySelector(".basket")
let formses = document.querySelector(".formse");




pizza.forEach((item) => {
    list.innerHTML += `<li class='list_style'>
    <img src="${item.img}" alt="">
    <h1>${item.name}</h1>
    <button class='add_button' data-id="${item.id}">AddPizza</button>
    </li>`
})




let add_button = document.querySelectorAll(".add_button")



formses.addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let form = Object.fromEntries(formData.entries());

    if (form.email === 'admin@admin' || form.pass === '123') {
        add_button.forEach((button) => {
            button.addEventListener('click', AddToBasket)
        })

        
        
        alert("You admin !!!")
    }
    

});

function AddToBasket(e) {
    let basketItems = JSON.parse(localStorage.getItem('basket')) || [];

    let itemId = e.target.getAttribute('data-id');
    let item = pizza.find(p => p.id == itemId);
    basketItems.push(item);
    localStorage.setItem('basket', JSON.stringify(basketItems));
    renderBasket();
}

function renderBasket() {
    let basketItems = JSON.parse(localStorage.getItem('basket')) || [];
    basket.innerHTML = '';
    basketItems.forEach(item => {
        basket.innerHTML += `<li class='list_style'>
            <img src="${item.img}" alt="">
            <h1>${item.name}</h1>
            <button class='delete_button' data-id="${item.id}">Delete</button>
        </li>`;
    });

    let delete_button = basket.querySelectorAll(".delete_button");
    delete_button.forEach((del) => {
        del.addEventListener('click', DeleteBasket);
    });
}



function DeleteBasket(e) {
    let itemId = e.target.getAttribute('data-id');
    let basketItems = JSON.parse(localStorage.getItem('basket')) || [];
    basketItems = basketItems.filter(item => item.id != itemId);
    localStorage.setItem('basket', JSON.stringify(basketItems));
    renderBasket()
}

renderBasket();
