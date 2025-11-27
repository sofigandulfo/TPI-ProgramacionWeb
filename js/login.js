document.addEventListener('DOMContentLoaded', () => {
    const inputContra = document.getElementById('campoContra');
    const resultContra = document.getElementById('resultPass');
    const resultEmail = document.getElementById('resultEmail');
    const inputEmail = document.getElementById('campoEmail');
    const botonContinuar = document.getElementById('aceptarBoton');
    botonContinuar.disabled = true;
    let emailValido=false;
    let passValido=false;
    
    
     


    inputContra.addEventListener('keyup',() =>{
    const contraValidar = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!%$])[A-Za-z\d#?!%$]{8,12}$/;
    const contra = inputContra.value;
  


        if(!contraValidar.test(contra)){
        resultContra.className = "invalido";
        resultContra.textContent="Contraseña no vailda";
         passValido=false;
      
        }else if(contraValidar.test(contra)){
           resultContra.textContent=" ";
           passValido=true;

           
        }

        if(contra===""){
            resultContra.textContent=" ";
        }

         if(emailValido&&passValido){
        botonContinuar.className="boton registro-boton";
         }else{
            botonContinuar.className="botonApagado registro-boton";
            botonContinuar.disabled = false;
         }

    
    });

    inputEmail.addEventListener('keyup',() =>{
    const emailValidar = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const email = inputEmail.value;

        if(!emailValidar.test(email)){
        resultEmail.className = "invalido";
        resultEmail.textContent="Email no vailda";
        emailValido=false;
      
        }else if(emailValidar.test(email)){
           resultEmail.textContent=" ";
           emailValido=true;

           
        }

        if(email===""){
            resultEmail.textContent=" ";
        }
         if(emailValido&&passValido){
        botonContinuar.className="boton registro-boton";
        botonContinuar.disabled = false;
         }else{
            botonContinuar.className="botonApagado registro-boton";
            botonContinuar.disabled = true; 
         }


    });

    function login(){
        const contra = inputContra.value.trim();
        const email = inputEmail.value.trim();
        


    
        const usuario = {
            contra: contra,
            email: email,
            fechaGuardado: new Date().toLocaleDateString()
        };

    
        const usuarioJSON = JSON.stringify(usuario);

        Object.keys(localStorage).forEach(key=>{
            const valorGuardado = localStorage.getItem(key);
            
            if(valorGuardado==usuarioJSON){
                console.log("Usuario encontrado");
                localStorage.setItem("logueado", "true");
                location.href = '../index.html';
                
            }else{
                resultContra.textContent="Usuario No encontrado";
            }
        });
        
    }

    botonContinuar.addEventListener("click",login)
   

    

    


});