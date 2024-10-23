let menu = [];

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
let navbarCenter = document.getElementById("menuCenter").innerHTML = menu.slice(1, 4).join("");
if (localStorage.email && localStorage.password) {
  let navbarRight = document.getElementById("menuRight").innerHTML = menu[5];
} else {
  let navbarRight = document.getElementById("menuRight").innerHTML = menu[4];
}
