const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const loginBtn = document.querySelector("#login-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginBtn.addEventListener("click", () => {
    if(!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim())
        return alert("Fill in all fields");

    if (!emailRegex.test(email.value)) 
        return alert("Invalid email");

    if(password.value !== confirmPassword.value)
        return alert("The passwords are different");

    return window.location.href = "../pages/home.html";
});