const name = document.querySelector("#name");
const email = document.querySelector("#email");
const schoolClass = document.querySelector("#school-class");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const registerBtn = document.querySelector("#register-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(schoolClass.value)

window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("token")) return window.location.href = "../index.html";
})

registerBtn.addEventListener("click", () => {
    if(!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim() || schoolClass.value === "default")
        return alert("Preencha todos os campos");

    if (!emailRegex.test(email.value)) 
        return alert("Email inválido");

    if(password.value !== confirmPassword.value)
        return alert("As senhas são diferentes");

    return window.location.href = "../pages/login.html";
});