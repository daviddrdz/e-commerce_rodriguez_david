let menu = [];

let categories = [
  {
    name: "Nosotros",
    href: "#",
    icon: "bx bx-buildings",
  },
  {
    name: "Home",
    href: "./index.html",
    icon: "bx bx-home-alt-2",
  },
  {
    name: "Productos",
    href: "#",
    icon: "bx bx-store-alt",
  },
  {
    name: "Carrito",
    href: "#",
    icon: "bx bx-cart",
  },
  {
    name: "Login",
    href: "#",
    icon: "bx bxs-user",
  }
];

for (let i of categories) {
  menu.push(`
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="${i.href}">
      <i class='${i.icon}'></i>
      ${i.name}</a>
    </li>
    `)
};

let navbarLeft = document.getElementById("menuLeft").innerHTML = menu[0]
let navbarCenter = document.getElementById("menuCenter").innerHTML = menu.slice(1, 3).join("");
let navbarRight = document.getElementById("menuRight").innerHTML = menu.slice(3, 5).join("");
