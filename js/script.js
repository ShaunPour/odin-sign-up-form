const form = document.querySelector('form');
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-input");
const phoneNum = document.getElementById("phone-input");
const password = document.getElementById("password-input");
const passwordConfirm = document.getElementById("password-input-confirm");
const eFirst = document.querySelector(".error-first");
const eLast = document.querySelector(".error-last");
const emailError = document.querySelector(".error-email");
const ePhone = document.querySelector(".error-phone");
const ePass = document.querySelector(".error-pass");
const submit = document.querySelector("input[type=submit]");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

submit.addEventListener('click', () => {
    if(firstName.value != "") {
        eFirst.classList.add("hide");
    }
    if(lastName.value != "") {
        eLast.classList.add("hide");
    }
    if(email.value != "") {
        emailError.classList.add("hide");
    }
    if(phoneNum.value != "" || phoneNum.value == undefined) {
        ePhone.classList.add("hide");
    }
    if(password.value != "" && password.value == passwordConfirm.value) {
        ePass.classList.add("hide");
    }
})