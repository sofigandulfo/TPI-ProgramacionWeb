document.addEventListener('DOMContentLoaded', () => {
    const form=document.getElementById('formContraseñaOlvidada');
    const emailInput=document.getElementById('email');
    form.addEventListener('submit', (Event) => {
        Event.preventDefault ();
        const email=emailInput.value.trim ();

        if(email===""){
            alert('Por favor, ingresa tu correo electronico.');
            return;
        }

        //como no hay backend hacemos una simlacion del envio del correo
        console.log('Simulando envio de enlace de recuperacion para:${email}');

        //Aqui es donde se enviaria la solicitud al servidor
        setTimeout( () => {
            alert('Enlace de recuperacion enviado. ¡Revisa tu bandeja dse entrada!');

            //Podemos limpiar el formulario y deshabilitar el boton temporalmente
            form.reset ();

        },1500); //simula un retraso de red de 1.5 segundos


    });
});