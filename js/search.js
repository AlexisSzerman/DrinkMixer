// Array de objetos con los nombres de los tragos y sus recetas

const cocktails = [{ id: "1", nombre: 'Gin Tonic', receta: "Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Agua Tónica en un vaso con abundante hielo. Decorá con una rodaja de limón, o pepino y listo"},
                   { id: "2", nombre: 'Cuba Libre', receta: "Para disfrutar de este trago debes poner 2.5oz de Ron y 3oz de Coca-Cola en un vaso con abundante hielo. Decorá con una rodaja de limón, o lima y listo"},
                   {id: "3", nombre: 'Vodka Tonic', receta: "Para disfrutar de este trago debes poner 2.5oz de Vodka y 3oz de Agua Tónica en un vaso con abundante hielo. Decorá con una rodaja de limón, o pepino y listo"},
                   {id: "4", nombre: 'Whiskey Sour', receta: "Para disfrutar de este trago debes poner 2.5oz de Whiskey y 3oz de Jugo de Limón en un vaso corto con abundante hielo. Decorá con una rodaja de limón y listo"},
                   {id: "5", nombre: 'Tom Collins', receta: "Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Soda en un vaso largo con abundante hielo. Decorá con una rodaja de limón, una cereza y listo"},
]

// Guardando el array en local storage

 /*  const cocktailsString = JSON.stringify(cocktails);
  localStorage.setItem("Cocktails", cocktailsString);
 */
// Trayendolo desde local storage y guardandolo en una variable que más abajo llamo
/* 
  const arrayCocktails = JSON.parse(localStorage.getItem ("Cocktails"))  */

//Variables asociadas al DOM mediante clases

const inputSearch = document.querySelector(".form-control")
const cocktailCard = document.querySelector(".cocktail-cards")

// Template strings con template literals para que aparezcan las cards para la búsqueda

const cardRecipe = (trago)=> {
  return `<div class="card my-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${trago.nombre}</h5>
    <p class="card-text">${trago.receta}</p>
  </div>
  <button class="save-btn btn btn-secondary btn-sm mt-2" data-id="${trago.id}">Agregar a favoritos</button>
</div>`
}

// Filtrado de los tragos asociado al input con arrow function

const filterCocktails = () => {
    let busqueda = inputSearch.value.trim().toLowerCase();
    let resultado = cocktails.filter(trago => trago.nombre.toLowerCase().startsWith(busqueda)); //En la entrega anterior utilizaba includes, pero me tiraba valores verdaderos que no estaban bien, por lo que decidí cambiar a startsWith que me trae la coincidencia exacta del nombre

    //Validación para que tire un mensaje de error en caso que no se ingrese un nombre corrrecto
    if (resultado.length === 0) {
      cocktailCard.innerHTML = `
        <div class="alert alert-danger mt-4" role="alert">
          <h5>No se han encontrado tragos con ese nombre. Por favor, ingresá un nombre válido</h5>
        </div>`;
    } else {
      mostrarCocktails(resultado);
    }
  }
  

//Con esta funcion muestro el contenido del array de cocktails gracias al forEach y lo asocio a la variable que crea las cards
const mostrarCocktails = (t)=> {
    let tarjetas = ""
    if (t.length > 0) {
        t.forEach(trago => {
            tarjetas += cardRecipe(trago)
        })
        cocktailCard.innerHTML = tarjetas
    }  
   
}  

//LLamo a las funciones 
mostrarCocktails(cocktails) // Acá la variable que contiene el array de objetos en local storage
inputSearch.addEventListener("input", filterCocktails)









