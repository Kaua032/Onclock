const name = document.querySelector("#name");
const email = document.querySelector("#email");
const schoolClass = document.querySelector("#school-class");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const registerBtn = document.querySelector("#register-button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(schoolClass.value)

registerBtn.addEventListener("click", () => {
    if(!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim() || schoolClass.value === "default")
        return alert("Fill in all fields");

    if (!emailRegex.test(email.value)) 
        return alert("Invalid email");

    if(password.value !== confirmPassword.value)
        return alert("The passwords are different");

    return window.location.href = "../pages/home.html";
});