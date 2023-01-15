// Array vacio para pushear los favoritos
let favoriteCocktails = [];
/* let btnFavorites = document.querySelector(".fav-btn"); */
// Get the button that opens the modal
let favBtn = document.querySelector('.fav-btn');
// Get the modal
let favoritesModal = document.getElementById('favoritesModal');
// Get the close button
let closeBtn = document.getElementsByClassName("close")[0];


function addToFavorites(name) {
  // para chequear que el cocktail no está ya en el array
  let duplicate = favoriteCocktails.find(function(cocktail) {
    return cocktail.name === name.name;
  });
  if (!duplicate) {
    favoriteCocktails.push(name);
    sessionStorage.setItem("Favorites", JSON.stringify(favoriteCocktails));
  } else {
    alert("Este cocktail ya está en tus favoritos!");
  }
}

// Add an event listener to the button that opens the modal
favBtn.addEventListener('click', function() {
  favoritesModal.style.display = "block";
});

// Add an event listener to the close button
closeBtn.addEventListener('click', function() {
  favoritesModal.style.display = "none";
});

// Add an event listener to the "Añadir a mis favoritos" button
let addFavoritesBtns = document.querySelectorAll(".save-btn");
  for (let i = 0; i < addFavoritesBtns.length; i++) {
    addFavoritesBtns[i].addEventListener("click", function() {
      let cocktail = {
        name: this.parentNode.querySelector(".card-title").innerHTML,
      };
      addToFavorites(cocktail);
    });
  }

//Para traer los favoritos que se guardaron en el session storage
  let favorites = JSON.parse(sessionStorage.getItem("Favorites"));

//Para que muestre en el modal de "mis favoritos" los elementos guardados en el array que está en session storage

  if (favorites) {
    let modalBody = document.querySelector("#favoritesModal .modal-body");
    modalBody.innerHTML = "";
    favorites.forEach(function(favorite, i) {
        let p = document.createElement("p");
        p.innerHTML = "🍸" + " " + favorite.name;
        modalBody.appendChild(p);
    });
  } 

