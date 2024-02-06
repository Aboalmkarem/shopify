let listcard = document.querySelector('.listcard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listcardFooter = document.querySelector('.listcard-footer');
let cartP = document.querySelector('.cart-p');
let buyBtnC = document.querySelector('.buyBtnC');
let paymentContainer = document.querySelector('.paymentContainer');
let paymentClosing = document.querySelector('.paymentClosing');
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

let products = [
    
    {
        id:1,
        name:'Airpods pro',
        image:'airpods pro(2rd generation).webp',
        price:80,
        quantity:1,
        href:"product 1/Airpods-pro.html",
        display:'none'
    },

    {
        id:2,
        name:'Athletic Shoe',
        image:'Athletic Shoe2.webp',
        price:110.97,
        quantity:1,
        href:"product 2/Athletic Shoe.html",
        display:'none'
    },

    {
        id:3,
        name:'Mino keyboard',
        image:'Mino keyboard.webp',
        price:361.14,
        quantity:1,
        href:"product 3/Mino keyboard.html",
        display:'none'
    },

    {
        id:4,
        name:'Iphone 14 pro max case',
        image:'i.webp',
        price:223.42,
        quantity:1,
        href:"product 4/iphone 14 case.html",
        display:'none'
    },

    {
        id:5,
        name:'TYPE-C charging cable',
        image:'sold1.webp',
        price:21.91,
        quantity:1,
        href:"#",
        display:"flex"
    },

    {
        id:6,
        name:'A glasses',
        image:'sold2.webp',
        price:119.28,
        quantity:1,
        href:"#",
        display:"flex"
    },

    {
        id:7,
        name:'Man Hoody',
        image:'sold3.webp',
        price:137.83,
        quantity:1,
        href:"#",
        display:"flex"
    },

    {
        id:8,
        name:'PUAIA Sweatpants',
        image:'sold4.webp',
        price:14.89,
        quantity:1,
        href:"#",
        display:"flex"
    },

    {
        id:9,
        name:'Wireless charger 3x1',
        image:'sold5.webp',
        price:126.08,
        quantity:1,
        href:"#",
        display:"flex"// flex = sold
    },
]

let listcards = [];



let keyP = localStorage.getItem("product");



if (localStorage != null) {
    addToCard(keyP);
}


function addToCard(key) {

    if (listcards[key] == null) {
        listcards[key] = products[keyP];
        listcards[key].quantity = 1;
    }
    reloadCard();
    console.log(listcards);
}


function reloadCard() {
    listcard.innerHTML = ``;
    let count = 0;
    let totalPrice = 0;
    listcards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        console.log(count);
        if (value != null) {
            let li = document.createElement('li');
            if(localStorage.getItem('off')!=null) {
            li.innerHTML = `
                    <div class="img"><img src="../images/${value.image}" alt="airpods image"></div>
                    <div class="name">${value.name}</div>
                    <del><div class="priceD">${value.price.toLocaleString()+"$"}</div></del>
                    <div class="price">${(value.price*localStorage.getItem('off')).toLocaleString()+"$"}</div>
                    <div class="counter">
                        <button id="minus" onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button id="plus" onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
                    </div>
                `;
                totalPrice = value.price*localStorage.getItem('off');
            } else if(localStorage.getItem('off')==null){
                li.innerHTML = `
                    <div class="img"><img src="../images/${value.image}" alt="airpods image"></div>
                    <div class="name">${value.name}</div>
                    <div class="price">${value.price.toLocaleString()+"$"}</div>
                    <div class="counter">
                        <button id="minus" onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button id="plus" onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
                    </div>
                `;
            }
            listcard.appendChild(li);
            listcardFooter.style.display = 'flex';
            cartP.style.display = 'none';
            quantity.style.display = 'flex';
        }
    })
    total.innerText = totalPrice.toLocaleString() + "$";
    localStorage.setItem("count", count);
    quantity.innerText = count;
}

if (quantity == 0) {
    quantity.style.display = 'none';
}

function changeQuantity(key, quantity) {
    console.log(key, quantity);
    if (quantity == 0) {
        delete listcards[key];
        listcardFooter.style.display = 'none';
        cartP.style.display = 'block';
        localStorage.clear();
        location.reload();
    } else {
        listcards[key].quantity = quantity;
        listcards[key].price = price * quantity;
    }
    reloadCard();
}
let price = products[keyP].price;


buyBtnC.addEventListener('click', ()=> {
    paymentContainer.style.display = 'flex';
});

paymentClosing.addEventListener('click', ()=> {
    paymentContainer.style.display = 'none';
});