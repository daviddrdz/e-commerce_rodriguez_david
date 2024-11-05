const main = document.querySelector("main");

let idProducto = window.location.search.split("=")[1];

let producto = data.find((product) => product.id == idProducto);

main.innerHTML = `
<div class="detalles">
  <div div class="contenido" >
    <img src="${producto.img}" height="200px">
      <div class="descripcion">
        <h1>${producto.title}</h1>
        <h2>$${producto.price} USD</h2>
        <p>${producto.detail}</p>
        <span><b>Stock:</b> ${producto.stock}</span>
        <span><b>Categoria:</b> ${producto.category}</span>
        <div class="botones">
          ${localStorage.getItem("email") ? `
          <div class="input-group">
            <button class="btn btn-dark" type="button" onclick="decreaseItem()">-</button>
            <input type="number" class="form-control" value="1" id="counter" />
            <button class="btn btn-dark" type="button" onclick="increaseItem()">+</button>
          </div>
          <button class="comprar" onclick="addItems()">Comprar</button>` : `
          <button class="login" onclick="location.href='./login.html'">Iniciar sesión para comprar</button>
          `}
        </div>
      </div>
    </div>
</div > `;

let counter = document.querySelector("#counter");

function decreaseItem() {
  if (counter.value > 1) {
    counter.value = Number(counter.value) - 1;
  }
}

function increaseItem() {
  if (counter.value < producto.stock) {
    counter.value = Number(counter.value) + 1;
  }
}

function addItems() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.push({ id: idProducto, quantity: Number(counter.value) });
  localStorage.setItem("cart", JSON.stringify(cart))

  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
  localStorage.setItem("quantity", quantity);
  document.querySelector("#cart").innerHTML = `<i class='bx bx-cart'></i>${quantity}`
}