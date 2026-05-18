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