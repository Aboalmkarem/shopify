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



let addBtn = document.querySelector('.addProduct'); 
let successfully = document.querySelector('.successfully');
let successClosing = document.getElementById('successClosing');

// key لما اضغط المنتج يتخزن 
function addProduct(key) {
    localStorage.setItem("product",key);
    addBtn.innerText = "Added successfully";
    // addBtn.style.background = '';
    quantity.innerText = 1;
    quantity.style.display = 'flex';
    successfully.style.display = 'flex';
}

successClosing.addEventListener('click', ()=> {
    successfully.style.display = 'none';
})


// بتغير العداد
let quantity = document.querySelector('.quantity');
quantity.innerText = localStorage.getItem('count');

if (localStorage.getItem('count') == 0 ) {
    quantity.style.display = 'none';
} else {
    quantity.style.display = 'flex';
}


// function addToCard(key) {
//     if (listcards[key] == null) {
//         listcards[key] = products[key];
//         listcards[key].quantity = 1;
//     }
//     reloadCard();
// }


buyBtnC.addEventListener('click', ()=> {
    paymentContainer.style.display = 'flex';
});

paymentClosing.addEventListener('click', ()=> {
    paymentContainer.style.display = 'none';
});