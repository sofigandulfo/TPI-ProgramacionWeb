const imagenes = [
    "assets/img/categoria00-item01.png",
    "assets/img/categoria00-item02.png",
    "assets/img/categoria00-item03.png",
    "assets/img/categoria00-item04.png",
    "assets/img/categoria00-item05.png"
];
const imagen = document.getElementById("img")
const btnatras = document.querySelector(".retroceder");
const btnavanzar = document.querySelector(".avanzar");
let iterador = 0;

function mostrarImagen() {
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
    if (iterador < imagenes.length) {
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