document.addEventListener("DOMContentLoaded", () => {
    const iconoUsuario = document.getElementById("icono-usuario");


    function irSegunEstado() {
        const registrado = localStorage.getItem("registrado") === "true";
        const logueado = localStorage.getItem("logueado") === "true";

        if (!registrado){
            return "/html/registrarse.html";
        } else if (!logueado){
            return "/html/login.html";
        } else {
            return "/html/datos-personales.html";
        }
    }

        iconoUsuario.addEventListener("click", () => {
            window.location.href = irSegunEstado();
    })
});