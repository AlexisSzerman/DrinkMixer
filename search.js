// Array de objetos con los nombres de los tragos y sus recetas


const cocktails = [{nombre: 'Gin Tonic', receta: "Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Agua Tónica en un vaso con abundante hielo. Decorá con una rodaja de limón, o pepino y listo"},
                   {nombre: 'Cuba Libre', receta: "Para disfrutar de este trago debes poner 2.5oz de Ron y 3oz de Coca-Cola en un vaso con abundante hielo. Decorá con una rodaja de limón, o lima y listo"},
                   {nombre: 'Vodka Tonic', receta: "Para disfrutar de este trago debes poner 2.5oz de Vodka y 3oz de Agua Tónica en un vaso con abundante hielo. Decorá con una rodaja de limón, o pepino y listo"},
                   {nombre: 'Whiskey Sour', receta: "Para disfrutar de este trago debes poner 2.5oz de Whiskey y 3oz de Jugo de Limón en un vaso corto con abundante hielo. Decorá con una rodaja de limón y listo"},
                   {nombre: 'Tom Collins', receta: "Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Soda en un vaso largo con abundante hielo. Decorá con una rodaja de limón, una cereza y listo"},
]

//Variables asociadas al DOM mediante clases

const inputSearch = document.querySelector(".form-control")
const cocktailCard = document.querySelector(".cocktail-cards")

// Cards con template literals para que aparezcan para el filtrado

const cardRecipe = (trago)=> {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${trago.nombre}</h5>
      <p class="card-text">${trago.receta}</p>
    </div>
  </div>`
}


// Filtrado de los tragos asociado al imput con arrow function

const filterCocktails = ()=> {
    let busqueda = inputSearch.value.trim().toUpperCase()
    let resultado = cocktails.filter(trago => trago.nombre.startsWith(busqueda)) //En la entrega anterior utilizaba includes, pero me tiraba valores verdaderos que no estaban bien, por lo que decidí cambiar a startsWith que me trae la coincidencia exacta del nombre, que es lo que se pretende hacer
    mostrarCocktails(resultado)
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
mostrarCocktails(cocktails) 
inputSearch.addEventListener("input", filterCocktails)
















                   
//Tener en cuenta para hacer pagina de validacion de edad y despues redireccionar a la principal
//ADD EVENT LISTENER
/* btnNuevo.addEventListener("click", ()=> {
    location.href = 'nuevo.html'
})
 */




