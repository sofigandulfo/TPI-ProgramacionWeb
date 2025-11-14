
document.addEventListener('DOMContentLoaded', () => {
    let articulos = document.querySelectorAll(".articulo-categoria");
    const buscador = document.getElementById("buscador");


    function buscarArticulos(){
        let contenido = buscador.value;
    
        
        if(contenido.length>=3){
            articulos.forEach(item=>{
                item.hidden=true;
                let nombre = item.querySelector(".item-valor-nombre").textContent;
                let autor = item.querySelector(".item-valor-autor").textContent;
                let descripcion = item.querySelector(".item-valor-descripcion").textContent;
                if(nombre.trim().toLowerCase().includes(contenido.trim().toLowerCase())||autor.trim().toLowerCase().includes(contenido.trim().toLowerCase())||descripcion.trim().toLowerCase().includes(contenido.trim().toLowerCase())){
                    item.hidden=false;
                }else{
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