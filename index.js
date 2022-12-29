
const ageLimit = 18;

const validateAge = () => {
  // Obtener la fecha de nacimiento del usuario del elemento de entrada
  const birthDateString = document.querySelector("#birth-date").value;

  // Convertir la fecha de nacimiento a un objeto Date
  const birthDate = new Date(birthDateString);

  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la edad del usuario en años
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Validar si el usuario es mayor de edad
  if (age >= ageLimit) {
    // Si es mayor de edad, llevarlo a la web app
    window.location.href = "main.html";
  } else {
    // Si no es mayor de edad, mostrar un mensaje de error
    alert("Lo siento, debes ser mayor de edad para acceder a esta web app.");
  }
}

// Asociar el evento submit al formulario y validar la edad al enviar el formulario
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recargar la página)
  validateAge();
});