import data from './data.js';

const titulo = (document.querySelector("h1").innerText = "Productos");
let section = document.querySelector(".contenedor");

let cards = data.map((product) => `
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
section.innerHTML = cards.join("");

const input = document.querySelector("input");
const buttonFilter = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

const filterList = () => {
    let filtered = data.filter((item) => item.title === input.value);
    cards = filtered.map((filter) => `
        <div class="carta">
            <img src="${filter.img}" height="200px">
            <h3>${filter.title}</h3>
                <div class="cajaprecio">
                    <span class="precio">$${filter.price}</span>
                </div>
            <div class="carrito">
                <button><a href=./producto.html?prod=${filter.id}><i class='bx bx-info-circle'></i>Ver más</a></button>
            </div>
        </div>
    `)
    section.innerHTML = cards.join("");
}

const resetList = () => {
    let cards = data.map((product) => `
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
    section.innerHTML = cards.join("");
}

buttonFilter.addEventListener("click", filterList);
buttonReset.addEventListener("click", resetList);