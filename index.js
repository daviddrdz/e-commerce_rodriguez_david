const titulo = document.querySelector("h1").innerText = "Productos";
let section = document.querySelector(".contenedor");
let card = [];

function fillCards() {
    for (let i = 1; i < 10; i++) {
        card.push(
                `<div class="carta">
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" height="200px">
                    <h3>Producto ${i}</h3>
                        <div class="cajaprecio">
                            <span class="precio">$$$</span>
                        </div>
                    <div class="carrito">
                        <button><i class='bx bx-info-circle'></i>Ver más</button>
                    </div>
                </div>`
            );
    }
    section.innerHTML = card.join().replaceAll(",", "");
}

fillCards();