const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const loginBtn = document.querySelector("#login-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("token")) return window.location.href = "../index.html";
})

loginBtn.addEventListener("click", () => {
    if(!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim())
        return alert("Preencha todos os campos");

    if (!emailRegex.test(email.value)) 
        return alert("IEmail inválido");

    if(password.value !== confirmPassword.value)
        return alert("As senhas são diferentes");

    localStorage.setItem("token", "Authenticated");
    
    return window.location.href = "../pages/home.html";
});