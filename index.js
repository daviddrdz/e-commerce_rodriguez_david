import data from './data.js';

const titulo = (document.querySelector("h1").innerText = "Productos");
let section = document.querySelector(".contenedor");

function fillCards() {
  let productos = data.map((product) => `
  <div class="carta">
      <img src="${product.img}" height="200px">
      <h3>${product.title}</h3>
          <div class="cajaprecio">
              <span class="precio">$${product.price}</span>
          </div>
      <div class="carrito">
          <button><a href=./producto.html?prod=${product.id}><i class='bx bx-info-circle'></i>Ver más</a></button>
      </div>
  </div>
  `)
  section.innerHTML = productos.join("");
}

fillCards();