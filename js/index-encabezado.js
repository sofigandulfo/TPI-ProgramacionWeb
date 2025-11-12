
document.addEventListener('DOMContentLoaded', () => {
    let articulos = document.querySelectorAll(".articulo-categoria");
    const buscador = document.getElementById("buscador");


    function buscarArticulos(){
        let contenido = buscador.value;
    
        
        if(contenido.length>=3){
            articulos.forEach(item=>{
                item.hidden=false;
                let nombre = item.querySelector(".item-valor-nombre").textContent;
                if(!nombre.trim().toLowerCase().includes(contenido.trim().toLowerCase())){
                    item.hidden=true;
                }
                
                

                
            })
        }else if(contenido.length<3){
            articulos.forEach(item=>{
               item.hidden=false;
            })

        }
        
    }
    buscador.addEventListener('keyup',buscarArticulos);
});