//Seleção de elementos
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const loginBnt = document.querySelector("#login-button");

//Funções
function login (user, password) {
    if (user && password) {
        if (user === "henrique" && password === "henrique") {
            console.log("login correto")
            window.open ("index.html", "_self");
        } else {
            console.log("login incorreto");
            return;
        }
    } else {
        return;
    }
}


//Eventos
loginBnt.addEventListener("click", () =>{
    login (emailInput.value, passwordInput.value);
})