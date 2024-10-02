const data = [
  {
    id: 1,
    title: "R-Class",
    detail:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 957435.3,
    stock: 75,
    img: "http://dummyimage.com/149x100.png/cc0000/ffffff",
  },
  {
    id: 2,
    title: "Courier",
    detail:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    price: 122019.44,
    stock: 18,
    img: "http://dummyimage.com/235x100.png/ff4444/ffffff",
  },
  {
    id: 3,
    title: "S-Class",
    detail:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    price: 456773.93,
    stock: 25,
    img: "http://dummyimage.com/106x100.png/dddddd/000000",
  },
  {
    id: 4,
    title: "Contour",
    detail: "Etiam vel augue.",
    price: 196167.31,
    stock: 86,
    img: "http://dummyimage.com/200x100.png/dddddd/000000",
  },
  {
    id: 5,
    title: "Continental",
    detail:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 988174.26,
    stock: 46,
    img: "http://dummyimage.com/226x100.png/ff4444/ffffff",
  },
  {
    id: 6,
    title: "Safari",
    detail:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    price: 632634.17,
    stock: 99,
    img: "http://dummyimage.com/113x100.png/ff4444/ffffff",
  },
  {
    id: 7,
    title: "Stratus",
    detail: "In sagittis dui vel nisl. Duis ac nibh.",
    price: 333529.16,
    stock: 59,
    img: "http://dummyimage.com/186x100.png/ff4444/ffffff",
  },
  {
    id: 8,
    title: "Miata MX-5",
    detail:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    price: 522456.61,
    stock: 66,
    img: "http://dummyimage.com/168x100.png/cc0000/ffffff",
  },
  {
    id: 9,
    title: "Navigator",
    detail:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 822674.23,
    stock: 71,
    img: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
  },
  {
    id: 10,
    title: "Suburban 1500",
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    price: 566040.05,
    stock: 27,
    img: "http://dummyimage.com/126x100.png/cc0000/ffffff",
  },
];

const main = document.querySelector("main");

let id = window.location.search.split("=")[1];

let producto = data.find((product) => product.id == id);

main.innerHTML = `
<div class="detalles">
  <h1>${producto.title}</h1>
    <div class="contenido">
      <img src="${producto.img}" height="200px">
        <div class="descripcion">
          <p>${producto.detail}</p>
          <span>Stock: ${producto.stock}</span>
        </div>
    </div>
  <h2>$${producto.price}</h2>
</div>`;