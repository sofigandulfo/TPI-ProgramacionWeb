import items from "../data/items.json" with { type: 'json' };
import configuracion from "../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.getElementById("tab-categoria-1");

let linksCategorias = document.querySelectorAll("a.tab-categoria");

function limpiarClasesEfectos() {
   const cards = document.querySelectorAll(".articulo-categoria");
   cards.forEach((card) => {
      card.classList.remove("efecto-america", "efecto-europa", "efecto-asia", "efecto-africa", "efecto-oceania");
   });
}

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      limpiarClasesEfectos();
      items.forEach((item) => {
         const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

         if (linkCategoria.innerText != Categoria) return;
         const articuloContenedor = document.querySelector("article." + Id.split("-")[1])

         articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].src = Portada;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].alt = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
         const rating = articuloContenedor.getElementsByClassName("item-valor-rating")[0];
         const puntaje = parseInt(Rating);
         rating.innerText = '★'.repeat(puntaje) + '☆'.repeat(5 - puntaje);

         const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));
         
         personalizados.forEach((personalizado, index) => {
            articuloContenedor.getElementsByClassName(`item-campo-personalizado_${index + 1}`)[0].innerText = personalizado.split(".")[1];
            articuloContenedor.getElementsByClassName(`item-valor-personalizado_${index + 1}`)[0].innerText = item[personalizado];
         });

         articuloContenedor.id = Id;
      });

      const cards = document.querySelectorAll(".articulo-categoria");
      
      switch(linkCategoria.innerText) {
         case "América":
            cards.forEach((card) => {
               card.classList.add("efecto-america");
               card.addEventListener("click", () => {
                  card.classList.add("click");
                  setTimeout(() => {
                     card.classList.remove("click");
                  }, 600);
               })
            })
            break;
         case "Europa":
            cards.forEach((card) => {
               card.classList.add("efecto-europa");
               card.addEventListener("click", () => {
                  card.classList.add("click");
                  setTimeout(() => {
                     card.classList.remove("click");
                  }, 600);
               })
            })
            break;
         case "Asia":
            cards.forEach((card) => {
               card.classList.add("efecto-asia");
               card.addEventListener("click", () => {
                  card.classList.add("click");
                  setTimeout(() => {
                     card.classList.remove("click");
                  }, 600);
               })
            })
            break;
         case "África":
            cards.forEach((card) => {
               card.classList.add("efecto-africa");
               card.addEventListener("click", () => {
                  card.classList.add("click");
                  setTimeout(() => {
                     card.classList.remove("click");
                  }, 600);
               })
            })
            break;
         case "Oceanía":
            cards.forEach((card) => {
               card.classList.add("efecto-oceania");
               card.addEventListener("click", () => {
                  card.classList.add("click");
                  setTimeout(() => {
                     card.classList.remove("click");
                  }, 600);
               })
            })
            break;
      }
   });
});

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};