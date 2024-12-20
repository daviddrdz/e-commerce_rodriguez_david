const data = [
  {
    id: 1,
    title: "Canon EOS R5",
    detail:
      "Cámara mirrorless profesional con sensor de 45 megapíxeles, perfecta para fotografía y video en alta resolución.",
    price: 3999.99,
    stock: 4,
    img: "../img/EOSr50.png",
    category: "Digital",
  },
  {
    id: 2,
    title: "Nikon Z9",
    detail:
      "La cámara insignia sin espejo de Nikon, ideal para profesionales que buscan velocidad y calidad de imagen excepcional.",
    price: 5499.99,
    stock: 6,
    img: "../img/NikonZ9.png",
    category: "Digital",
  },
  {
    id: 3,
    title: "Sony Alpha 1",
    detail:
      "Cámara full-frame de 50.1 MP, con capacidades avanzadas de video 8K y ráfagas de hasta 30 fps.",
    price: 6499.99,
    stock: 2,
    img: "../img/SonyA1.png",
    category: "Digital",
  },
  {
    id: 4,
    title: "Leica M10-R",
    detail:
      "Una cámara de telémetro con sensor full-frame de 40 MP, combinando tecnología moderna con diseño clásico.",
    price: 8299.99,
    stock: 8,
    img: "../img/LeicaM10R.png",
    category: "Digital",
  },
  {
    id: 5,
    title: "Pentax 67",
    detail:
      "Cámara de formato medio para película, conocida por su calidad de imagen y robustez. Ideal para fotografía analógica profesional.",
    price: 2500.99,
    stock: 3,
    img: "../img/Pentax67.png",
    category: "Film",
  },
  {
    id: 6,
    title: "Fujifilm GFX 100S",
    detail:
      "Cámara de formato medio digital, con un sensor de 102 MP, ideal para imágenes de alta resolución y paisajes.",
    price: 5999.99,
    stock: 2,
    img: "../img/FujifilmGFX100S.png",
    category: "Digital",
  },
  {
    id: 7,
    title: "Hasselblad 500C/M",
    detail:
      "Una icónica cámara de formato medio para película, utilizada por profesionales para obtener imágenes de calidad excepcional.",
    price: 4000.00,
    stock: 5,
    img: "../img/Hasselblad500CM.png",
    category: "Film",
  },
  {
    id: 8,
    title: "Olympus Mark III",
    detail:
      "Cámara mirrorless Micro 4/3, compacta y ligera, perfecta para fotógrafos en movimiento.",
    price: 1799.99,
    stock: 4,
    img: "../img/OlympusM3.png",
    category: "Digital",
  },
  {
    id: 9,
    title: "Mamiya RZ67 Pro II",
    detail:
      "Una cámara de formato medio para película, preferida por fotógrafos de moda y retratos por su calidad de imagen y versatilidad.",
    price: 3500.00,
    stock: 7,
    img: "../img/MamiyaRZ67Pro2.png",
    category: "Film",
  },
  {
    id: 10,
    title: "Panasonic Lumix S1H",
    detail:
      "Cámara híbrida de video y foto full-frame, diseñada para cineastas que buscan grabación en 6K con calidad profesional.",
    price: 3999.99,
    stock: 6,
    img: "../img/LumixS1H.png",
    category: "Digital",
  },
];

const categories = [
  {
    name: "Nosotros",
    href: "#",
    icon: "bx bx-buildings",
    id: "",
  },
  {
    name: "Home",
    href: "../index.html",
    icon: "bx bx-home-alt-2",
    id: "",
  },
  {
    name: "Productos",
    href: "#",
    icon: "bx bx-store-alt",
    id: "",
  },
  {
    name: "Login",
    href: "../html/login.html",
    icon: "bx bxs-user",
    id: "",
  },
  {
    name: `${localStorage.getItem("email")}`,
    href: "#",
    icon: "bx bxs-user",
    id: "",
  },
  {
    name: `${localStorage.getItem("quantity")}`,
    href: "../html/carrito.html",
    icon: "bx bx-cart",
    id: "cart",
  },
];

const LOGIN_USER = {
  email: "admin@example.com",
  password: "123",
}