const titulo = document.querySelector("h1").innerText = "Productos";
let section = document.querySelector(".contenedor");
let card = [];

for (let i = 1; i < 10; i++) {
    card.push(`
            <div class="carta">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" height="200px">
                <h3>Producto ${i}</h3>
                    <div class="cajaprecio">
                        <span class="precio">$$$</span>
                    </div>
                <div class="carrito">
                    <button><i class='bx bx-cart'></i>Agregar al carrito</button>
                </div>
            </div>
        `);
}

section.innerHTML = card.join().replaceAll(",", "");