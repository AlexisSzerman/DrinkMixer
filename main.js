let optionSelected = document.querySelectorAll(".form-select");
let btnMixer = document.querySelector(".btn-mix");
let alertCocktail = document.createElement("h5");

btnMixer.addEventListener("click", function () {
  let spirit = document.querySelector("#spirit").value;
  let mixer = document.querySelector("#mixer").value;

  let selector = document.querySelector(".selector");
  selector.innerHTML = `
  <div class="alert alert-primary" role="alert">
  <h4>Elegiste ${spirit} y ${mixer} .</h4>
  </div>`;

  if (spirit.includes("Gin") && mixer.includes("Agua Tónica")) {
    alertCocktail.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="ginTonic.jpg" alt="Gin Tonic">
    <div class="card-body">
      <h5 class="card-title">Gin Tonic</h5>
      <p class="card-text">Excelente, podes hacerte un Gin-Tonic. Debes poner 2.5oz de Gin y 3oz de Agua Tónica en una  
       copa con abundante hielo. Decorá con una rodaja de limón o pepino y a disfrutar!</p>
    </div>
</div>`;
    document.querySelector(".selector").appendChild(alertCocktail);
  } else if (spirit.includes("Ron") && mixer.includes("Coca-Cola")) {
    alertCocktail.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="cubaLibre.jpg" alt="Cuba Libre">
        <div class="card-body">
          <h5 class="card-title">Cuba Libre</h5>
          <p class="card-text">Para disfrutar de este trago debes poner 2.5oz de Ron y 3oz de Coca-Cola en un vaso con  
           abundante hielo. Decorá con una rodaja de limón o lima y listo!</p>
        </div>
    </div>
        `;
    document.querySelector(".selector").appendChild(alertCocktail);
  }
});
