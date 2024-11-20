let form = document.querySelector("form");
let p = document.querySelector("p");
let button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (LOGIN_USER.email === form.elements.email.value && LOGIN_USER.password === form.elements.password.value) {
    localStorage.setItem("email", form.elements.email.value);
    localStorage.setItem("password", form.elements.password.value);
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0")
    location.href = "../index.html"
  } else {
    p.style.display = "flex";
    form.elements.email.value = "";
    form.elements.password.value = "";
  }
})