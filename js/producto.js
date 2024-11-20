const main = document.querySelector("main");
let idProduct = window.location.search.split("=")[1];
let product = data.find((item) => item.id == idProduct);

main.innerHTML = `
<div class="detalles">
  <div div class="contenido" >
    <img src="${product.img}">
      <div class="descripcion">
        <h1>${product.title}</h1>
        <h2>$${product.price} USD</h2>
        <p>${product.detail}</p>
        <span><b>Stock:</b> ${product.stock}</span>
        <span><b>Categoria:</b> ${product.category}</span>
        <div class="botones">
          ${localStorage.getItem("email") ? `
          <div class="input-group">
            <button class="btn btn-dark" type="button" onclick="decreaseItem()">-</button>
            <input type="number" class="form-control text-center" value="1" id="counter" />
            <button class="btn btn-dark" type="button" onclick="increaseItem()">+</button>
          </div>
          <button class="comprar" onclick="addItems()">Comprar</button>` : `
          <button class="login" onclick="location.href='../html/login.html'">Iniciar sesión para comprar</button>
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
  if (counter.value < product.stock) {
    counter.value = Number(counter.value) + 1;
  }
}

function addItems() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let existeEnCart = cart.some((item) => item.product.id === Number(idProduct));

  if (existeEnCart) {
    cart = cart.map(item => {
      if (item.product.id === Number(idProduct)) {
        return { ...item, quantity: item.quantity + Number(counter.value) }
      } else {
        return item;
      }
    })
  } else {
    cart.push({ product: product, quantity: Number(counter.value) })
  }

  Toastify({
    text: "Agregado al carrito correctamente",
    duration: 3000,
    close: true,
    style: {
      background: "#28a742",
    }
  }).showToast();

  localStorage.setItem("cart", JSON.stringify(cart))
  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
  localStorage.setItem("quantity", quantity);
  document.querySelector("#cart").innerHTML = `<i class='bx bx-cart'></i> ${quantity}`
  counter.value = 1;
}