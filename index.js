//Establecemos una variable con el minimo de edad requerido, una con el año actual y con el mensaje de error
const ageLimit = 18;
const currentYear = 2022;
let errorMsg = document.createElement("h4");

//Armé una función que tome la edad del input, parseamos el año para que sea un número

const validateAge = () => {
  const birthYearString = document.querySelector("#birth-year").value;

  const birthYear = parseInt(birthYearString);

  const age = currentYear - birthYear; // Resta simple para saber la edad y el condicional para validar acceso

  if (age >= ageLimit) {
    window.location.href = "main.html";
  } else {
    // Si no es mayor de edad, mostrarmos un mensaje de error
    errorMsg.innerHTML = `
    <div class=" container alert alert-danger" role="alert">
    <h4>Lo sentimos, no puedes ingresar a DrinkMixer</h4>
    </div>`;
    document.querySelector(".age-error").appendChild(errorMsg);
  }
  localStorage.setItem("Edad", age);
};

// Asocio el submit a la etiqueta form y a su vez con el submit
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Para prevenir que recargue la página
  validateAge();
});

/* const saveCocktails = () => {
  const cocktailsString = JSON.stringify(cocktails);
  localStorage.setItem("cocktails", cocktailsString);
}

saveCocktails(); */

