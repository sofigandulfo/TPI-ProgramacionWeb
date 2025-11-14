
document.addEventListener('DOMContentLoaded', () => {


const imagenes = [];
const nombres = [];
const articulos = document.querySelectorAll(".articulo-categoria");
const imagen = document.getElementById("img")
const nombre = document.getElementById("titulo-carrousel")
const btnatras = document.querySelector(".retroceder");
const btnavanzar = document.querySelector(".avanzar");
let iterador = 0;

articulos.forEach(item => {
    if(imagenes.length<5){
        let imgextraida = item.querySelector(".item-valor-portada").src;
        let nombreextraido = item.querySelector(".item-valor-nombre").textContent;
        console.log(nombreextraido);
        imagenes.push(imgextraida);
        nombres.push(nombreextraido);
        console.log(imgextraida);  
    }

});
function mostrarImagen() {
        nombre.textContent=nombres[iterador];
        imagen.src = imagenes[iterador];


}
mostrarImagen();

btnavanzar.addEventListener("click", () => {
    iterador++;
    if (iterador >= imagenes.length) {
        iterador = 0;
    }
    mostrarImagen();
});
btnatras.addEventListener("click", () => {
    iterador--;
    if (iterador < 0) {
        iterador = (imagenes.length - 1);
    }
    mostrarImagen();
});

setInterval(() => {
    let random;
    do {
        random = Math.floor(Math.random() * 5);
    } while (random == iterador);
    iterador = random;
    mostrarImagen();
}, 5000);
});