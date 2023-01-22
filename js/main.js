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

  //Utilizando el operador ternario condicional leo las selecciones, veo que incluyen y si es verdadero muesta una tarjeta con el trago y la receta.
  let cardCocktail = document.createElement("div");

  cardCocktail.innerHTML =
    spirit.includes("Gin") && mixer.includes("Agua Tónica")
      ? `<div class="card" style="width: 18rem;">
       <img src="../images/ginTonic.jpg" alt="Gin Tonic"> 
          <div class="card-body">
              <h5 class="card-title">Gin Tonic</h5>
              <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Agua Tónica 
               en una copa con abundante hielo. Decorá con una rodaja de limón o pepino y a disfrutar!</p>
          </div>
      </div>`
      : spirit.includes("Ron") && mixer.includes("Coca-Cola")
      ? `<div class="card" style="width: 18rem;">
          <img src="../images/cubaLibre.jpg" alt="Cuba Libre">
          <div class="card-body">
            <h5 class="card-title">Cuba Libre</h5>
            <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Ron y 3oz de Coca-Cola en un vaso con  
             abundante hielo. Decorá con una rodaja de limón o lima y listo!</p>
          </div>
      </div>`
      : spirit.includes("Gin") && mixer.includes("Soda")
      ? `<div class="card" style="width: 18rem;">
          <img src="../images/tomCollins.jpg" alt="Tom Collins">
          <div class="card-body">
            <h5 class="card-title">Tom Collins</h5>
            <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Gin y 3oz de Soda en un vaso con  
             abundante hielo. Decorá con una rodaja de limón, una cereza y listo!</p>
          </div>
      </div>`
      : spirit.includes("Whiskey") && mixer.includes("Jugo de limón")
      ? `<div class="card" style="width: 18rem;">
            <img src="../images/whiskeySour.webp" alt="Whiskey Sour">
            <div class="card-body">
              <h5 class="card-title">Whiskey Sour</h5>
              <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Whiskey y 3oz de Jugo de limón en un vaso con abundante hielo. Decorá con una rodaja de limón, una cereza y listo!</p>
            </div>
        </div>`
      : spirit.includes("Vodka") && mixer.includes("Agua Tónica")
      ? `<div class="card" style="width: 18rem;">
            <img src="../images/vodkaTonic.webp" alt="Vodka Tonic">
            <div class="card-body">
              <h5 class="card-title">Vodka Tonic</h5>
              <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Vodka y 3oz de agua Tónica en un vaso con abundante hielo. Decorá con una rodaja de limón y listo!</p>
            </div>
        </div>`
      : spirit.includes("Ron") && mixer.includes("Soda")
      ? `<div class="card" style="width: 18rem;">
            <img src="../images/mojito.webp" alt="Mojito">
            <div class="card-body">
              <h5 class="card-title">Mojito</h5>
              <p class="card-text">Para disfrutar de este trago debes poner en un vaso alto 2.5oz de Ron, unas hojas de menta, algunas rodajas de lima o limón y machacar con algo de azúcar morena. Agrega abundante hielo y 3oz de Soda. Decorá con una rodaja de limón, menta extra y listo!</p>
            </div>
        </div>`
      : spirit.includes("Vodka") && mixer.includes("Jugo de limón")
      ? `<div class="card" style="width: 18rem;">
              <img src="../images/caipiroska.jpg" alt="Caipiroska">
              <div class="card-body">
                <h5 class="card-title">Caipiroska</h5>
                <p class="card-text">Para disfrutar de este trago debes poner en un vaso corto 2.5oz de Vodka, unas rodajas de lima o limón y machacar con algo de azúcar morena. Agrega abundante hielo y 3oz de Jugo de limón. Decorá con una rodaja de limón y listo!</p>
              </div>
          </div>`
      : spirit.includes("Tequila") && mixer.includes("Jugo de limón")
      ? `<div class="card" style="width: 18rem;">
                <img src="../images/margarita.jpg" alt="Margarita">
                <div class="card-body">
                  <h5 class="card-title">Margarita</h5>
                  <p class="card-text">Para disfrutar de este trago debes poner en una copa tipo cocktail 2.5oz de Tequila, unas rodajas de lima o limón y machacar con algo de azúcar morena. Agrega abundante hielo y 3oz de Jugo de limón. Decorá con una rodaja de limón y listo!</p>
                </div>
            </div>`
      : spirit.includes("Whiskey") && mixer.includes("Coca-Cola")
      ? `<div class="card" style="width: 18rem;">
                  <img src="../images/whisKola.webp" alt="Whiskola">
                  <div class="card-body">
                    <h5 class="card-title">Whiskola</h5>
                    <p class="card-text">Para disfrutar de este trago debes poner en un vaso largo con abundante hielo 2.5oz de Whiskey y 3oz de Coca-Cola. Decorá con una rodaja de limón y listo!</p>
                  </div>
              </div>`
      : spirit.includes("Ron") && mixer.includes("Jugo de limón")
      ? `<div class="card" style="width: 18rem;">
                    <img src="../images/daiquiri.webp" alt="Daiquiri">
                    <div class="card-body">
                      <h5 class="card-title">Daiquiri</h5>
                      <p class="card-text">Para disfrutar de este trago debes poner en una coctelera abundante hielo 2.5oz de Ron y 3oz de Jugo de limón y batir con fuerza. Cuela todo en una copa cocktail . Si quieres una version frutal y frozen, agrega la fruta que te guste, pon todo en una licuadora. Decorá con una rodaja de limón y listo!</p>
                    </div>
                </div>`
      : `<div class="alert alert-danger" role="alert">
      <h4>No contamos con recetas para los ingredientes seleccionados, por favor elegí otros</h4>
      </div>`;

  if (cardCocktail.innerHTML !== "")
    document.querySelector(".selector").appendChild(cardCocktail);
});
