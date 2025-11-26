document.addEventListener('DOMContentLoaded', () => {

    let imagenes = [];
    let nombres = [];
    let intervalo = null;

    let articulos = document.querySelectorAll(".articulo-categoria");
    const IMAGEN = document.getElementById("img")
    const NOMBRE = document.getElementById("titulo-carrousel")
    const BTNATRAS = document.querySelector(".retroceder");
    const BTNAVANZAR = document.querySelector(".avanzar");
    const CATEGORIAS = document.querySelectorAll(".tab-categoria");
    const PUNTOS = document.querySelectorAll(".punto");

    let iterador = 0;

    cargariamgenes();
    mostrarImagen();
    iniciarIntervalo();

    BTNAVANZAR.addEventListener("click", () => {
        stopIntervalo();
        PUNTOS[iterador].classList.remove("punto-seleccionado");
        iterador++;
        if (iterador >= imagenes.length) {
            iterador = 0;
        }
        mostrarImagen();
        iniciarIntervalo();
    });
    BTNATRAS.addEventListener("click", () => {
        stopIntervalo();
        PUNTOS[iterador].classList.remove("punto-seleccionado");
        iterador--;
        if (iterador < 0) {
            iterador = (imagenes.length - 1);
        }
        mostrarImagen();
        iniciarIntervalo();
    });
    PUNTOS.addEventListener("click",() => {

    });
    CATEGORIAS.forEach(tab => {
        tab.addEventListener("click", () => {
            imagenes.length = 0;
            nombres.length = 0;
            cargariamgenes();
            mostrarImagen();
        });
    });
    function cargariamgenes() {
        articulos.forEach(item => {
            let imgextraida = item.querySelector(".item-valor-portada").src;
            let nombreextraido = item.querySelector(".item-valor-nombre").textContent;
            console.log(nombreextraido);
            imagenes.push(imgextraida);
            nombres.push(nombreextraido);
            console.log(imgextraida);
        });
    }
    function mostrarImagen() {
        NOMBRE.textContent = nombres[iterador];
        IMAGEN.src = imagenes[iterador];
        PUNTOS[iterador].classList.add("punto-seleccionado");
    }
    function iniciarIntervalo() {
        intervalo = setInterval(() => {
        PUNTOS[iterador].classList.remove("punto-seleccionado");
        let random;
        do {
            random = Math.floor(Math.random() * 5);
        } while (random == iterador);
        iterador = random;
        mostrarImagen();
    }, 6000);
    }
    function stopIntervalo() {
        clearInterval(intervalo);
        intervalo = null;
    }

});