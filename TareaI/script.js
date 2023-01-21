//Selectores
const bodySelector = document.querySelector("body");
const spinner = document.querySelector("#spinner");
//Eventos
document.addEventListener("DOMContentLoaded", cargar);

//Funciones

function cargar(e) {
    setTimeout(() => {
        spinner.style.transition = "2s";
        spinner.classList.add("hidden");
    }, 3000);
}
