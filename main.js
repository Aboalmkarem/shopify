const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');
var crazyBtn = document.getElementById("crazyBtn");
var crazyDiv = document.querySelector('.crazyDiv');
// نعرف المتغير اللي هيشيل الكلام دا
let cards = document.querySelector('.cards');

let successfully = document.querySelector('.successfully');
let successClosing = document.getElementById('successClosing');
// تخزين معلومات في اوبجيكت عشان يبقي المحتوي استاتيك يعني قابل للتغيير من الجافا
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



toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}



/*
const productButton = document.querySelectorAll('.button');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
})

close.addEventListener("click", ()=>{
    payment.style.display = "none";
})*/

/*const testBtn = document.querySelector('.login-btn');

testBtn.addEventListener('click', ()=>
    {

        body.classList.add('active');
        
});*/


// زرار عرض 70%
crazyDiv.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    // console.log(1650-x,950-y);

    crazyBtn.style.left = (1070-x) + "px"; // 870=> 780
    crazyBtn.style.top = (550-y) + "px"   //400 => 550 
});

crazyDiv.addEventListener('mouseout', function(event) {
    crazyBtn.style.left = "50%";
    crazyBtn.style.top = "50%";
});

crazyBtn.addEventListener('click', ()=> {
    // for (let i = 0; i < products.length; i++) {
    //     products[i].price = products[i].price-products[i].price*.7;
    //     console.log(products[i].price);
    // }
    localStorage.setItem('off','.7');
    successfully.style.display = 'flex';
});
successClosing.addEventListener('click', ()=> {
    successfully.style.display = 'none';
});
// console.log(products[1].price);

// المنتجات اللي في الصفحة الرئيسية
function initApp() {
    products.forEach((value)=> {
        // تعمل ديف
        let card = document.createElement('div')
        // تعمل كلاس
        card.classList.add('card')
        // بتعمل محتوي داخل الديف
        card.innerHTML = `
            <a href="${value.href}">
            <img src="images/${value.image}">
            <h3>${value.name}</h3>
            <p>for ${value.price} $</p>
            </a>
            <div class="sold" style="display: ${value.display}">Sold</div>
        `
        cards.appendChild(card);
    })

}
initApp();


// العداد اللي فوق السلة
let quantity = document.querySelector('.quantity');
quantity.innerText = localStorage.getItem('count');

if (localStorage.getItem('count') == 0 ) {
    quantity.style.display = 'none';
} else {
    quantity.style.display = 'flex';
}








// addBtn.addEventListener('click', addToCard())



// function red() {
//     quantity.style.background = "red";
// }

// red();







// let listcard = document.createElement('div');
// listcard.classList.add('listcard');
// listcard.innerHTML = `
// <div class="listcard">
//         <div class="img"><img src="${value.image}" alt="airpods image"></div>
//         <div class="name">${value.name}</div>
//         <div class="price">${value.price.toLocaleString()}</div>
        
//         <div class="counter">
//             <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
//             <div class="count">${value.quantity}</div>
//             <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
//         </div>
//     </div>
// `