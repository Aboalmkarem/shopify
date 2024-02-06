let register = document.getElementById('register');
let login = document.getElementById('login');
let flep = document.querySelector('.flep');
// لما تكون عايز تحول من انشاء حساب لتسجيل دخول

register.onclick = function () {  
    flep.style.transform = 'rotateY(180deg)';
}
login.onclick = function () {  
    flep.style.transform = 'rotateY(0deg)';
}


// validation   التحقق

// login
/*const form = document.getElementById('form');
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');




// المفروض كان يبقي تسجيل بعد انشاء الحساب من الذاكرة
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const loginEmailValue = loginEmail.value;
    const loginPasswordValue = loginPassword.value;
    console.log(loginEmailValue,loginPasswordValue);
    if(localStorage.getItem(loginEmailValue) !== null && localStorage.getItem(loginEmailValue) === loginPasswordValue ) {

    }
}*/



// loginBtn.onclick = ()=> {
//     console.log(loginEmailValue,loginPasswordValue);

// }

// sign up

const form2 = document.getElementById('form2');
const signName = document.getElementById('signName');
const signEmail = document.getElementById('signEmail');
const signPassword = document.getElementById('signPassword');
const signConfirm = document.getElementById('signConfirm');
let singBtn = document.getElementById('singBtn');

form2.addEventListener('submit', (e)=>{
    e.preventDefault();

    chickInputs2();
});

function chickInputs2() {
    // get values
    const signNameValue = signName.value;
    const signEmailValue = signEmail.value;
    const signPasswordValue = signPassword.value;
    const signConfirmValue = signConfirm.value;

    // name validation
    if (signNameValue.length >= 15){
        // show error
        // add error class
        setErrorFor(signName, 'Name length can not be over 15');
    } else if (signNameValue === ''){
        setErrorFor(input, 'Name can not be blank');
    } else {
        setSuccessFor(signName);
    }
    // email validation
    if (!isEmail(signEmailValue)) {
        setErrorFor(signEmail, 'Email is not valid');
    } else {
        setSuccessFor(signEmail);
    }

    // password validation
    if (signPasswordValue.length <= 5) {
        setErrorFor(signPassword, 'Password length cannot be less than 5');
    } else {
        setSuccessFor(signPassword);
    }

    // confirm validation
    if (signPasswordValue !== signConfirmValue){
        setErrorFor(signConfirm, 'passwords are not match');
    } else {
        setSuccessFor(signConfirm);
    }
}

// error message
function setErrorFor(input, message){
    const inputBox = input.parentElement; // .input-box
    const small = inputBox.querySelector('small');

    small.innerText = message;

    inputBox.className = 'inputbox error';
};

// success message
function setSuccessFor(input) {
    const inputBox = input.parentElement;
    inputBox.className = 'inputbox success';
};

// if email contans .
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// if (name==null || name=="") {
//     return true;
// } else {
//     return false;
// }