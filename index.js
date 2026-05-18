console.log("hello ziyad")
const name = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button= document.getElementById("btnsignup");

console.log(name, email, password, button)

button.addEventListener("click", function(){
    console.log("mon nom est " + name.value);
    console.log("mon email est " + email.value);
    console.log("mon mot de passe est " + password.value);

    alert("mon nom est " + name.value + "\n" + "mon email est " + email.value + "\n" + "mon mot de passe est " + password.value);
})

const btnlogin = document.getElementById("signin");
const btnsignup = document.getElementById("signup");



const formSignup = document.getElementById("formSignup");
const formSignin = document.getElementById("formSignin");



btnlogin.addEventListener("click", function(){
    formSignin.style.display = "flex";
    formSignup.style.display = "none";
})

btnsignup.addEventListener("click", function(){
    formSignup.style.display = "flex";
    formSignin.style.display = "none";
})