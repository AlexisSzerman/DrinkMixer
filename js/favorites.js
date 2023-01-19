// Capturando modal de favoritos
let favoritesModal = document.getElementById('favoritesModal');
//Variable para capturar el boton para abrir el modal
let favBtn = document.querySelector('.fav-btn');
//Variable para capturar el boton para cerrar el modal
let closeBtn = document.getElementsByClassName("close")[0];

//Event listener para abrir modal
favBtn.addEventListener('click', function() {
  favoritesModal.style.display = "block";
}); 

//Event listener para cerrar modal
closeBtn.addEventListener('click', function() {
  favoritesModal.style.display = "none";
}); 


//Buscando las tarjetas para que extraiga la infromación

const cocktailCards = document.querySelectorAll(".card");
cocktailCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    cocktailsData(e.target.parentElement);
  });
});

document.querySelector(".fav-btn").addEventListener("click", () => {
  cocktailFavs();
});

//Array vacio para guardar los cocktails
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function cocktailsData(drink) {
  const infoDrink = {
    nombre: drink.querySelector(".card-title").textContent,
    id: drink.querySelector(".btn").getAttribute("data-id"),
  };

  //Agrega los favoritos al modal
  favorites = [...favorites, infoDrink];
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function cocktailFavs() {
  //Elimina los favoritos dentro del modal
  cleanFavs();

  favorites.forEach((mixing) => {
    const mixFav = document.createElement("h5");
    mixFav.innerHTML = `
    <div class="container d-flex">
    <h5>🍸 ${mixing.nombre}</h5>
    <button class="btn btn-danger ms-4 delFav-btn" id="${mixing.id}">X</button>
    </div>
    `;

    favModal.appendChild(mixFav);
    
  });
}

function cleanFavs() {
  favModal.innerHTML = "";
}
 
favModal.addEventListener("click", deleteFav);


//Elimina los favoritos dentro del modal

function deleteFav (e) {
  if (e.target.classList.contains("btn-danger")) {
    let drinkID = e.target.getAttribute("id");
    swalWithBootstrapButtons.fire({ //Sweetalert para confirmar o no el borrado del favorito
      title: `Quitar el cocktail de favoritos?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        favorites = favorites.filter((mixing) => mixing.id !== drinkID);
        cocktailFavs();
        swalWithBootstrapButtons.fire(
          'Listo!',
          'Quitaste el cocktail de tus favoritos.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
        
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Conservaste el cocktail en favoritos',
          'error'
        )
      }
    });
  }
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

//Toastify cuando se agrega un cocktail a favoritos

let toastify = document.querySelectorAll(".save-btn");
toastify.forEach(button => {
  button.addEventListener("click", () => {
    Toastify({
      text: "Agregado a Favoritos",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){}
    }).showToast();
  });
});




//falta agregar los favoritos a localStorage y el Json aparte