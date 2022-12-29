// Variables asociadas al DOM

let optionSelected = document.querySelectorAll(".form-select");
let btnMixer = document.querySelector(".btn-mix");
let cardCocktail = document.createElement("h5");

// Evento qye escucha los dropdowns

btnMixer.addEventListener("click", function () {
  let spirit = document.querySelector("#spirit").value;
  let mixer = document.querySelector("#mixer").value;

  let selector = document.querySelector(".selector");
  selector.innerHTML = `
  <div class="alert alert-primary" role="alert">
  <h4>Elegiste ${spirit} y ${mixer} .</h4>
  </div>`; // Confirmacion de la selección
  
  //Con este condicional leo las selecciones, veo que incluyen y si es verdadero muesta una tarjeta con el trago y la receta. Proximamente agregaré más recetas.

  if (spirit.includes("Gin") && mixer.includes("Agua Tónica")) {
    cardCocktail.innerHTML = `
    <div class="card" style="width: 18rem;">
     <img src="../images/ginTonic.jpg" alt="Gin Tonic"> 
        <div class="card-body">
            <h5 class="card-title">Gin Tonic</h5>
            <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Agua Tónica 
             en una copa con abundante hielo. Decorá con una rodaja de limón o pepino y a disfrutar!</p>
        </div>
    </div>`;
    document.querySelector(".selector").appendChild(cardCocktail);
  } else if (spirit.includes("Ron") && mixer.includes("Coca-Cola")) {
    cardCocktail.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="../images/cubaLibre.jpg" alt="Cuba Libre">
        <div class="card-body">
          <h5 class="card-title">Cuba Libre</h5>
          <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Ron y 3oz de Coca-Cola en un vaso con  
           abundante hielo. Decorá con una rodaja de limón o lima y listo!</p>
        </div>
    </div>`;
    document.querySelector(".selector").appendChild(cardCocktail);
  }else if (spirit.includes("Gin") && mixer.includes("Soda")) {
    cardCocktail.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="../images/tomCollins.jpg" alt="Tom Collins">
        <div class="card-body">
          <h5 class="card-title">Tom Collins</h5>
          <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Soda en un vaso con  
           abundante hielo. Decorá con una rodaja de limón, una cereza y listo!</p>
        </div>
    </div>`;
    document.querySelector(".selector").appendChild(cardCocktail); 
    } 
    // En caso de que los ingredientes no formen ninguna receta aparece este msj
    else cardCocktail.innerHTML = `
    <div class="alert alert-danger" role="alert">
    <h4>No contamos con recetas para los ingredientes seleccionados, por favor elegí otros</h4>
    </div>`
    document.querySelector(".selector").appendChild(cardCocktail);

});

