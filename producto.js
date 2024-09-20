class Producto {
  constructor(titulo, detalle, precio, stock, imagen) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }

  details() {
    const main = document.querySelector("main").innerHTML = `
    <div class="detalles">
      <h1>${this.titulo}</h1>
      <div class="contenido">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.imagen}.jpg" height="200px">
        <div class="descripcion">
          <p>${this.detalle}</p>
          <span>Stock: ${this.stock}</span>
        </div>
      </div>
      <h2>$${this.precio.toFixed(2)}</h2>
    </div>
    `;
  }
}

const producto1 = new Producto(
  "Producto 1", 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", 
  239382, 
  10, 
  1
)

producto1.details();
