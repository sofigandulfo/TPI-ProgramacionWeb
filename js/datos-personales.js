document.addEventListener('DOMContentLoaded', () => {

  
    const inputEmail = document.getElementById('email');
    const inputContra=document.getElementById('contra');
    const botonCambiosUno = document.getElementById('boton-cambios-uno');
    const botonCambiosDos = document.getElementById('boton-cambios-dos');
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputNroDoc = document.getElementById('documento');
    const inputTelefono = document.getElementById('telefono');
    const inputEmailSec = document.getElementById('email-sec');
    const form = document.getElementsByClassName('input');

    let nombreValido = true;
    let apellidoValido = true;
    let docValido = true;
    let telefonoValido = true;
    let emailSecValido = true;

    
    

    
    
    botonCambiosUno.disabled=true;
    botonCambiosUno.className="btn-apagado";
    botonCambiosDos.disabled=true;
    botonCambiosDos.className="btn-apagado";


    inputEmail.addEventListener('keyup',() =>{
    const emailValidar = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const email = inputEmail.value;

        if(!emailValidar.test(email)){
        inputEmail.className="input-invalido";
        
      
        }else if(emailValidar.test(email)){
           inputEmail.className="input-valido"
           botonCambiosUno.disabled=false;
           botonCambiosUno.className='btn';

           
        }

        if(email===""){
            inputEmail.className="input-invalido";
        
        }



    });
    
    inputContra.addEventListener('keyup',() =>{
    const contraValidar = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    const contra = inputContra.value;
  


        if(!contraValidar.test(contra)){
        inputContra.className="input-invalido";
        }
        else if(contraValidar.test(contra)){
           inputContra.className="input-valido"


           
        }

        if(contra===""){
            inputContra.className="input-invalido";
        }


    
    });

    inputNombre.addEventListener('keyup',() =>{
    const nombreValidar = /^[a-zA-Z\s-']*$/;
    const nombre = inputNombre.value;
  


        if(!nombreValidar.test(nombre)){
            inputNombre.className="input-invalido";
            nombreValido=false;
       
        }
        else if(nombreValidar.test(nombre)){
            inputNombre.className="input-valido"
            nombreValido=true;


           
        }

        if(nombre===""){
            inputNombre.className="input";
            nombreValido=true;
        }

    
    });

    inputApellido.addEventListener('keyup',() =>{
    const apellidoValidar = /^[a-zA-Z\s-']*$/;
    const apellido = inputApellido.value;
  


        if(!apellidoValidar.test(apellido)){
            inputApellido.className="input-invalido";
            apellidoValido=false;
        
        }
        else if(apellidoValidar.test(apellido)){
           inputApellido.className="input-valido"
           apellidoValido=true;
           


           
        }

        if(apellido===""){
            inputApellido.className="input";
            apellidoValido=true;
        }

    
    });

    inputNroDoc.addEventListener('keyup',() =>{
    const docValidar = /^[0-9]*$/;
    const doc = inputNroDoc.value;
  


        if(!docValidar.test(doc)){
        inputNroDoc.className="input-invalido";
        docValido=false;
        }
        else if(docValidar.test(doc)){
            inputNroDoc.className="input"
            docValido=true;


           
        }

        if(doc===""){
            inputApellido.className="input";
            docValido=true;
        }

    
    });

    inputTelefono.addEventListener('keyup',() =>{
    const telefonoValidar = /^[0-9-+()]*$/;
    const telefono = inputTelefono.value;
  


        if(!telefonoValidar.test(telefono)){
            inputTelefono.className="input-invalido";
            telefonoValido=false;
        }
        else if(telefonoValidar.test(telefono)){
            inputTelefono.className="input"
            telefonoValido=true;


           
        }

        if(telefono===""){
            telefonoValidar.className="input";
            telefonoValido=true;
        }

    
    });

    inputEmailSec.addEventListener('keyup',() =>{
    const emailSecValidar = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailSec = inputEmailSec.value;

        if(!emailSecValidar.test(emailSec)){
            inputEmailSec.className="input-invalido";
            emailSecValido=false;
        
      
        }else if(emailSecValidar.test(emailSec)){
            inputEmailSec.className="input-valido"
            emailSecValido=true;

           
        }

        if(emailSec===""){
            inputEmailSec.className="input";
            emailSecValido=true;
        }



    });

    document.addEventListener('keyup',()=>{
        if(!nombreValido|!apellidoValido|!docValido|!telefonoValido|!emailSecValido){
            botonCambiosDos.disabled=true;
            botonCambiosDos.className="btn-apagado";
        }else if(nombreValido|apellidoValido|docValido|telefonoValido|emailSecValido){
            botonCambiosDos.disabled=false;
            botonCambiosDos.className='btn';
        }
    })
    
    

    

    


});