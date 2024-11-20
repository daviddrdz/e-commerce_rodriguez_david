let mainCart = document.querySelector("main");
let sectionProduct = document.querySelector("#carritoCardsProducto");
let sectionPrice = document.querySelector("#carritoCardsPrecio");
let divProduct = document.querySelector(".productos");
let divPrice = document.querySelector(".precio");
let pError = document.querySelector("#errorCarritoVacio");

function getCards(cards) {
  if (cards.length > 0) {
    pError.style.display = "none";
    let productList = cards.map(
      card => `
      <div class="productoCard">
        <img src="${card.product.img}" height="100px" width="150px">
        <div class="productoInfo">
          <h2>${card.product.title}</h2>
          <div class="productoDetalles">
            <div class="productoPrecio">
              <span class="productoDetallesTitulo">Precio</span>
              <span>$${(card.product.price).toLocaleString('en-US')}</span>
            </div>
            <div class="productoCantidad">
              <span class="productoDetallesTitulo">Cantidad</span>
              <span>${card.quantity}</span>
            </div>
            <div class="productoTotal">
              <span class="productoDetallesTitulo">Total</span>
              <span>$${(card.product.price * card.quantity).toLocaleString('en-US')}</span>
            </div>
            <div class="productoEliminar">
              <a onclick="removeCards(${card.product.id})"><i class='bx bx-trash'></i>Eliminar</a>
            </div>
          </div>
        </div>
      </div>
    `);
    let productPrice = cards.map(
      card => `
      <div class="precioProducto">
        <p>${card.product.title}</p>
        <span class="productoCantidad">x${card.quantity}</span>
        <span class="precioTotalProducto">$${(card.product.price * card.quantity).toLocaleString('en-US')}</span>
      </div>
    `
    )
    sectionProduct.innerHTML = productList.join("");
    sectionPrice.innerHTML = productPrice.join("");
  } else {
    divProduct.style.display = "none";
    divPrice.style.display = "none";
    mainCart.style.alignItems = "center"
    mainCart.style.padding = 0;
  }
}

function total(cards) {
  let cartTotal = document.querySelector("#total");
  let total = cards.reduce((acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0)
  cartTotal.innerText = "$" + (total).toLocaleString('en-US');
}

function removeCards(id) {
  let cards = JSON.parse(localStorage.getItem("cart"));
  let newCards = cards.filter(card => card.product.id !== id);
  localStorage.setItem("cart", JSON.stringify(newCards));
  let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
  localStorage.setItem("quantity", quantity);
  document.querySelector("#cart").innerHTML = `<i class='bx bx-cart'></i> ${quantity}`
  getCards(newCards);
  total(newCards);
  if (newCards.length === 0) {
    pError.style.display = "block";
  }
}

function clearCart() {
  Swal.fire({
    title: "Alerta",
    text: "¿Seguro que quieres vaciar el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, obvio",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      pError.style.display = "block";
      document.querySelector("#cart").innerHTML = `<i class='bx bx-cart'></i> 0`
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("quantity", "0");
      getCards([]);
      total(0);
    }
  })
}

getCards(JSON.parse(localStorage.getItem("cart")));
total(JSON.parse(localStorage.getItem("cart")));
