document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formContraseñaOlvidada");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const btn = document.querySelector(".btnEnviarEnlace");

    btn.disabled = true;
    btn.classList.add("btnDeshabilitado");


    const validarEmail = () => {
        const email = emailInput.value.trim();

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (email === "") {
            emailError.textContent = "Campo obligatorio.";
            emailInput.classList.add("input-invalido");
            return false;
        }

        if (!regex.test(email)) {
            emailError.textContent = "Ingrese un email válido";
            emailInput.classList.add("input-invalido");
            return false;
        }

        emailError.textContent = "";
        emailInput.classList.remove("input-invalido");
        return true;
    };
   
    const actualizarBoton = () => {
        if (validarEmail()) {
            btn.disabled = false;
            btn.classList.remove("btnDeshabilitado");
        } else {
            btn.disabled = true;
            btn.classList.add("btnDeshabilitado");
        }
    };

    emailInput.addEventListener("keyup", actualizarBoton);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validarEmail()) return;

        setTimeout(() => {
            alert("Enlace de recuperación enviado. ¡Revisá tu bandeja de entrada!");
            form.reset();
            actualizarBoton();
        }, 1000);
    });

});