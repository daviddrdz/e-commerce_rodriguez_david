import data from './data.js';

const main = document.querySelector("main");

let id = window.location.search.split("=")[1];

let producto = data.find((product) => product.id == id);

main.innerHTML = `
<div class="detalles">
  <h1>${producto.title}</h1>
    <div class="contenido">
      <img src="${producto.img}" height="200px">
        <div class="descripcion">
          <p>${producto.detail}</p>
          <span>Stock: ${producto.stock}</span>
          <span>Categoria: ${producto.category}</span>
        </div>
    </div>
  <h2>$${producto.price}</h2>
</div>`;