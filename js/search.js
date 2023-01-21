
let favorites = JSON.parse(localStorage.getItem("favorites")) || []; //Array vacio para guardar los cocktails
const inputSearch = document.querySelector(".form-control");
const cocktailCard = document.querySelector(".cocktail-cards");

const cardRecipe = (trago) => {
  return `<div class="card my-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${trago.nombre}</h5>
    <p class="card-text">${trago.receta}</p>
  </div>
  <button class="save-btn btn btn-secondary btn-sm mt-2" data-id="${trago.id}">Agregar a favoritos</button>
</div>`;
};

const filterCocktails = () => {
  let busqueda = inputSearch.value.trim().toLowerCase();
  let resultado = cocktails.filter((trago) =>
    trago.nombre.toLowerCase().startsWith(busqueda)
  );

  if (resultado.length === 0) {
    cocktailCard.innerHTML = `
        <div class="alert alert-danger mt-4" role="alert">
          <h5>No se han encontrado tragos con ese nombre. Por favor, ingresá un nombre válido</h5>
        </div>`;
  } else {
    mostrarCocktails(resultado);
  }
};

const mostrarCocktails = (t) => {
  let tarjetas = "";
  if (t.length > 0) {
    t.forEach((trago) => {
      tarjetas += cardRecipe(trago);
    });
    cocktailCard.innerHTML = tarjetas;
  }
  // Add event listener to each save button
  const saveButtons = document.querySelectorAll(".save-btn");
  saveButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      addToFavorites(e.target.parentElement);
    });
  });
};

let cocktails;
fetch("js/cocktails.json")
  .then((response) => response.json())
  .then((data) => {
    cocktails = data;
    mostrarCocktails(cocktails);
    inputSearch.addEventListener("input", filterCocktails);
  })
  .catch((error) => {
    console.log(error);
  });



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

const cocktailCards = document.querySelectorAll(".save-btn");
cocktailCards.forEach((card) => {
  button.addEventListener("click", (e) => {
    cocktailsData(e.target.parentElement);
  });
});

document.querySelector(".fav-btn").addEventListener("click", () => {
   cocktailFavs() ;
}); //chatgpt dice que esto no es necesario


const buttons = document.querySelectorAll(".save-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    cocktailsData(e.target.parentElement);
  });
});


function addToFavorites(drink) {
  // Extract information from the drink card
  const infoDrink = {
    nombre: drink.querySelector(".card-title").textContent,
    id: drink.querySelector(".btn").getAttribute("data-id"),
  };
  // Add the drink to the favorites array
  favorites = [...favorites, infoDrink];
  // Save the favorites array to local storage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  // Show a toast notification
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
function deleteFav(e) {
  if (e.target.classList.contains("btn-danger")) {
    let drinkID = e.target.getAttribute("id");
    swalWithBootstrapButtons.fire({ 
      title: `Quitar el cocktail de favoritos?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        favorites = favorites.filter((mixing) => mixing.id !== drinkID);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        cocktailFavs();
        swalWithBootstrapButtons.fire(
          'Listo!',
          'Quitaste el cocktail de tus favoritos',
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
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary'
  },
  buttonsStyling: false
})

