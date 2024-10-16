import data from './data.js';

const titulo = (document.querySelector("h1").innerText = "Productos");
let section = document.querySelector(".contenedor");
const input = document.querySelector("input");
const buttonFilter = document.querySelector("#filter");
const buttonReset = document.querySelector("#reset");
const buttonAll = document.querySelector("#all");
const categoryButtons = document.querySelectorAll(".categoryButton");

function fillCards(filter) {
    let cards = filter.map((item) => `
        <div class="carta">
            <img src="${item.img}" height="200px">
            <h3>${item.title}</h3>
            <div class="cajaprecio">
                <span class="precio">$${item.price}</span>
            </div>
            <div class="carrito">
                <button><a href=./producto.html?prod=${item.id}><i class='bx bx-info-circle'></i>Ver más</a></button>
            </div>
        </div>
    `)
    section.innerHTML = cards.join("");
}

fillCards(data);

const filterList = () => {
    let filtered = data.filter((item) => item.title === input.value);
    fillCards(filtered);
}

const filterCategory = (category) => {
    let itemCategory = data.filter((item) => item.category === category);
    fillCards(itemCategory);
}

buttonFilter.addEventListener("click", filterList);
buttonReset.addEventListener("click", () => fillCards(data));
buttonAll.addEventListener("click", () => fillCards(data));
for (let i in categoryButtons) {
    categoryButtons[i].addEventListener("click", (event) => {
        const category = event.target.getAttribute("value");
        filterCategory(category);
    })
}