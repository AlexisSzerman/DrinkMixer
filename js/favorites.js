// Get the button that opens the modal
let favBtn = document.querySelector('.fav-btn');
// Get the modal
let favoritesModal = document.getElementById('favoritesModal');
// Get the close button
let closeBtn = document.getElementsByClassName("close")[0];

//Add an event listener to the button that opens the modal 
 favBtn.addEventListener('click', function() {
  favoritesModal.style.display = "block";
}); 
 
// Add an event listener to the close button
 closeBtn.addEventListener('click', function() {
  favoritesModal.style.display = "none";
}); 

 


//Buscando las tarjetas para que extraiga la infromación

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerDatosProducto(e.target.parentElement);
  });
});

document.querySelector(".fav-btn").addEventListener("click", () => {
  carritoHTML();
});


//Array vacio para guardar los productos
let articulosCarrito = [];


function leerDatosProducto(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".card-title").textContent,
    id: producto.querySelector(".btn").getAttribute("data-id"),
  };

  //Agrega elementos al carrito
  articulosCarrito = [...articulosCarrito, infoProducto];

  //LLamo a la funcion para mostrar los productos en el carrito
  carritoHTML();
}


function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  articulosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="container">
    <h5>${producto.titulo}</h5>
    <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
    </div>
    `;
    carrito.appendChild(row);
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}
 
carrito.addEventListener("click", eliminarProducto);

// Eliminar productos del carrito

function eliminarProducto(e) {
  if (e.target.classList.contains("btn-danger")) {
    let productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoID
    );
    carritoHTML();
  }
}


  


