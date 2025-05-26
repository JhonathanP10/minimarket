document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  if (productList) {
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      productList.appendChild(div);
    });
  }
});

function agregarAlCarrito(id) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito`);
}