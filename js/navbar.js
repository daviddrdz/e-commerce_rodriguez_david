let menu = [];

for (let i of categories) {
  menu.push(`
    <li class="nav-item">
      <a class="nav-link" id="${i.id}"aria-current="page" href="${i.href}">
      <i class='${i.icon}'></i>
      ${i.name}</a>
    </li>
    `)
};

document.getElementById("menuLeft").innerHTML = menu.slice(1, 3).join("");
localStorage.getItem("email")
  ? document.getElementById("menuRight").innerHTML = `
  ${menu[4]}${menu[5]}<span onclick="logout()" id="logout">Cerrar Sesión</span>`
  : document.getElementById("menuRight").innerHTML = menu[3];

function logout() {
  localStorage.clear();
  location.href = "../index.html";
}