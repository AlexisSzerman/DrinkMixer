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
let favorites = [];

function cocktailsData(drink) {
  const infoDrink = {
    nombre: drink.querySelector(".card-title").textContent,
    id: drink.querySelector(".btn").getAttribute("data-id"),
  };

  //Agrega los favoritos al modal
  favorites = [...favorites, infoDrink];
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
    favorites = favorites.filter(
      (mixing) => mixing.id !== drinkID
    );
    cocktailFavs();
  }
}

//para agregar sweet alert
/* button.addEventListener("click", (e) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this item!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your item has been deleted!", {
        icon: "success",
      });
      e.target.remove();
    } else {
      swal("Your item is safe!");
    }
  });
}); */


//falta agregar los favoritos a localStorage y el Json aparte