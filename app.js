// Usando una funcion para verificar la mayoría de edad del usuario

let añoNacimiento = Number(prompt("Ingresá tu año de nacimiento"));
let añoActual = 2022;


//Usando un bucle para que obligatoriamente se ponga la edad

while(añoNacimiento == "" ){
  alert("Por favor, ingresá tu año de nacimiento");
  añoNacimiento = prompt("Debes ingresar tu año de nacimiento para continuar"); 
}

function edad(añoNacimiento, añoActual) {
  return añoActual - añoNacimiento;
}

let resultado = edad(añoNacimiento, añoActual);

//Usando un condicional para comenzar con el funcionamiento en caso de ser mayor


if (resultado >= 18) {
  alert("Preparate para armar los mejores tragos");
  
  function saludoInicio(){
    let nombre = prompt("Por favor ingresá tu nombre")
    let apellido   = prompt("Por favor, ingresá tu apellido")
    alert(`Bienvenido a Drink Mixer ${nombre} ${apellido}! ¿Listo para prepararte los mejores tragos?`)
  } 
  
  saludoInicio();
  
//Usando switch para seleccionar los ingredientes

  let alcoholBase = prompt(`Elegí la base de tu trago:
  1: Vodka
  2: Gin
  3: Ron
  `);

  switch (alcoholBase) {
    case "1":
      let vodkabase = prompt(`Elegí el diluyente:
          1: Tónica
          2: Gaseosa Lima Limón
          3: Jugo de Naranja
          `);
      switch (vodkabase) {
        case "1":
          alert(
            "Perfecto! Agregale hielo y tenés un Vodka-Tonic, que lo disfrutes!"
          );
          break;
        case "2":
          alert(
            "Perfecto! Agregale hielo, azúcar y jugo de lima y tenés una Caipivodka, que la disfrutes!"
          );
          break;
        case "3":
          alert(
            "Perfecto! Agregale hielo y tenés un Destornillador, que lo disfrutes!"
          );
          break;
        default: alert ("Para poder hacer tu trago necesitas seleccionar alguno de estos elementos");
          break;
      }

      break;

    case "2":
      let ginBase = prompt(`Elegí el diluyente:
          1: Tónica
          2: Soda
          3: Vermouth seco
          `);
      switch (ginBase) {
        case "1":
          alert(
            "Perfecto! Agregale hielo, una rodaja de limón y tenés un Gin-Tonic, que lo disfrutes!"
          );
          break;
        case "2":
          alert(
            "Perfecto! Agregale hielo, jugo de limón y azúcar y tenés un Tom Collins, que lo disfrutes!"
          );
          break;
        case "3":
          alert(
            "Perfecto! Batilo con hielo, colalo en copa cocktail y tenés un Martini, que lo disfrutes!"
          );
          break;
        default: alert ("Para poder hacer tu trago necesitas seleccionar alguno de estos elementos");
          break;
      }
      break;

    case "3":
      let ronBase = prompt(`Elegí el diluyente:
      1: Coca-Cola
      2: Soda
      3: Frutillas
      `);
      switch (ronBase) {
        case "1":
          alert(
            "Perfecto! Agregale hielo, una rodaja de limón y tenés un Cuba Libre, que lo disfrutes!"
          );
          break;
        case "2":
          alert(
            "Perfecto! Agregale hielo, menta y azúcar y tenés un Mojito, que lo disfrutes!"
          );
          break;
        case "3":
          alert(
            "Perfecto! Licua todo con hielo junto a jugo de limón y tenés un Daiquiri de frutilla, que lo disfrutes!"
          );
          break;
        default: alert ("Para poder hacer tu trago necesitas seleccionar alguno de estos elementos");
          break;
      }
  }
} else {
  alert("Disculpa, todavía no podés utilizar nuestra app");
}

