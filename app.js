/* -------------------------Las dos entregas combinadas------------------------------------------------

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
  

  let bases = [];
let diluyentes = [];

bases.push (prompt ("Agregá una espirituosa (Vodka, Ron, Gin, Tequila o Whiskey)"))


diluyentes.push (prompt ("Agregá un  diluyente (Coca, Sprite, Jugo de naranja o Tonica)"))

let coctelera = bases.concat(diluyentes);
/* console.log(coctelera) */

//Para saber que ingredientes agregué
/*
for (let i=0; i<=10; i++) {
  console.log (coctelera [i])
}


if (coctelera.includes('gin') && coctelera.includes('tonica')) {
  alert("Gin-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (coctelera.includes('vodka') && coctelera.includes('tonica')) {
  alert("Vodka-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (coctelera.includes('ron') && coctelera.includes('coca')) {
  alert("Cuba Libre: mezcle el ron y la Coca-Cola, agregue jugo de limón y mucho hielo");
}


  
} else {
  alert("Disculpa, todavía no podés utilizar nuestra app");
}



//-----------------------------------------------------------------------------------------------------------

















/* Opcion 1

const ingredientes = [];
let cantidad = 2

do {
  let base = prompt ("Ingresá la base de tu trago, puede ser Vodka, Ron, Gin, Tequila o Whiskey")
  ingredientes.push (base);
  let diluyentes = prompt ("Ingresá un diuyente para tu trago, puede ser Coca-Cola, Sprite, Jugo de naranja o Tonica")
  ingredientes.push (diluyentes);
} while (ingredientes.length != cantidad)

alert (`Ingresaste ${ingredientes}` )

if (ingredientes.includes('gin') || ingredientes.includes('Gin') && ingredientes.includes('tonica') || ingredientes.includes('Tonica') || ingredientes.includes('tónica') || ingredientes.includes('Tónica')) {
  alert("Gin-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (ingredientes.includes('vodka') || ingredientes.includes('Vodka') && ingredientes.includes('tonica') || ingredientes.includes('Tonica') || ingredientes.includes('tónica') || ingredientes.includes('Tónica'))  {
  alert("Vodka-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (ingredientes.includes('ron') || ingredientes.includes('Ron') && ingredientes.includes('coca') || ingredientes.includes('Coca') || ingredientes.includes('Coca-Cola') || ingredientes.includes('coca-cola')) {
  alert("Cuba Libre: mezcle el ron y la Coca-Cola, agregue jugo de limón y mucho hielo");
}
*/




/* Opcion 2
// Variables de bases del cocktail y de los diluyentes

let bases = [];
let diluyentes = [];

bases.push (prompt ("Agregá una espirituosa (Vodka, Ron, Gin, Tequila o Whiskey)"))


diluyentes.push (prompt ("Agregá un  diluyente (Coca, Sprite, Jugo de naranja o Tonica)"))

let coctelera = bases.concat(diluyentes);
/* console.log(coctelera) */

//Para saber que ingredientes agregué
/*
for (let i=0; i<=10; i++) {
  console.log (coctelera [i])
}


if (coctelera.includes('gin') && coctelera.includes('tonica')) {
  alert("Gin-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (coctelera.includes('vodka') && coctelera.includes('tonica')) {
  alert("Vodka-Tonic: mezcle el gin y el agua tónica, agregue jugo de limón y mucho hielo");
}

if (coctelera.includes('ron') && coctelera.includes('coca')) {
  alert("Cuba Libre: mezcle el ron y la Coca-Cola, agregue jugo de limón y mucho hielo");
}









/*
Sugerencia de Chatgpt
<!DOCTYPE html>
<html>
  <head>
    <title>Cócteles con ingredientes en casa</title>
  </head>
  <body>
    <h1>Cócteles con ingredientes en casa</h1>
    <form>
      <label for="ingredientes">Ingredientes:</label><br>
      <input type="checkbox" id="ingrediente1" value="limón">Limón<br>
      <input type="checkbox" id="ingrediente2" value="ron">Ron<br>
      <input type="checkbox" id="ingrediente3" value="hielo">Hielo<br>
      <input type="checkbox" id="ingrediente4" value="agua tónica">Agua tónica<br>
      <input type="checkbox" id="ingrediente5" value="menta">Menta<br>
      <input type="button" value="Generar recetas" onclick="generarRecetas()">
    </form>
    <div id="recetas">
      <!-- Aquí se mostrarán las recetas generadas -->
    </div>
    <script>
      function generarRecetas() {
        // Recoge la información sobre los ingredientes seleccionados por el usuario
        var ingredientes = [];
        if (document.getElementById('ingrediente1').checked) {
          ingredientes.push(document.getElementById('ingrediente1').value);
        }
        if (document.getElementById('ingrediente2').checked) {
          ingredientes.push(document.getElementById('ingrediente2').value);
        }
        if (document.getElementById('ingrediente3').checked) {
          ingredientes.push(document.getElementById('ingrediente3').value);
        }
        if (document.getElementById('ingrediente4').checked) {
          ingredientes.push(document.getElementById('ingrediente4').value);
        }
        if (document.getElementById('ingrediente5').checked) {
          ingredientes.push(document.getElementById('ingrediente5').value);
        }
        
        // Genera las recetas de cócteles que se pueden hacer con los ingredientes seleccionados
        var recetas = [];
        if (ingredientes.includes('limón') && ingredientes.includes('ron') && ingredientes.includes('hielo')) {
          recetas.push('Daiquirí: mezcle el ron, el jugo de limón y el hielo en una coctelera y cócteles para servir en un vaso con hielo.');
        }
        if (ingredientes.includes('limón') && ingredientes.includes('ron') && ingredientes.includes('hielo') && ingredientes.
        */

/* 


Opcion chat gpt

// Define an array of spirits
let spirits = ['vodka', 'gin', 'rum', 'tequila', 'whiskey'];

// Define an array of mixers
let mixers = ['coca-cola', 'sprite', 'orange juice', 'tonic water'];

// Use a loop to display a prompt for each spirit, allowing the user to select one
let selectedSpirit = null;
for (let i = 0; i < spirits.length; i++) {
  let spirit = spirits[i];
  let response = prompt(`Select a spirit: ${spirit}`);
  if (response === 'yes') {
    selectedSpirit = spirit;
    break;
  }
}

// Use a loop to display a prompt for each mixer, allowing the user to select one
let selectedMixer = null;
for (let i = 0; i < mixers.length; i++) {
  let mixer = mixers[i];
  let response = prompt(`Select a mixer: ${mixer}`);
  if (response === 'yes') {
    selectedMixer = mixer;
    break;
  }
}

// Use a switch statement to determine the recipe for the selected cocktail
let recipe = '';
switch (selectedSpirit) {
  case 'vodka':
    switch (selectedMixer) {
      case 'coca-cola':
        recipe = alert ("No Vodka and Coke Cocktails");
        break;
      case 'sprite':
        recipe = alert ('Vodka and Lemonade: Pour 1.5 oz of vodka and 2 oz of lemonade into a glass with ice, stir, and enjoy!') ;
        break;
      case 'orange juice':
        recipe = alert ('Screwdriver: Pour 1.5 oz of vodka and 2 oz of orange juice into a glass with ice, stir, and enjoy!');
        break;
      case 'tonic water':
        recipe = alert ('Vodka Tonic: Pour 1.5 oz of vodka and 2 oz of tonic water into a glass with ice, stir, and enjoy!');
        break
    }
  }
  */


  /*
Sugerencia de Chatgpt
<!DOCTYPE html>
<html>
  <head>
    <title>Cócteles con ingredientes en casa</title>
  </head>
  <body>
    <h1>Cócteles con ingredientes en casa</h1>
    <form>
      <label for="ingredientes">Ingredientes:</label><br>
      <input type="checkbox" id="ingrediente1" value="limón">Limón<br>
      <input type="checkbox" id="ingrediente2" value="ron">Ron<br>
      <input type="checkbox" id="ingrediente3" value="hielo">Hielo<br>
      <input type="checkbox" id="ingrediente4" value="agua tónica">Agua tónica<br>
      <input type="checkbox" id="ingrediente5" value="menta">Menta<br>
      <input type="button" value="Generar recetas" onclick="generarRecetas()">
    </form>
    <div id="recetas">
      <!-- Aquí se mostrarán las recetas generadas -->
    </div>
    <script>
      function generarRecetas() {
        // Recoge la información sobre los ingredientes seleccionados por el usuario
        var ingredientes = [];
        if (document.getElementById('ingrediente1').checked) {
          ingredientes.push(document.getElementById('ingrediente1').value);
        }
        if (document.getElementById('ingrediente2').checked) {
          ingredientes.push(document.getElementById('ingrediente2').value);
        }
        if (document.getElementById('ingrediente3').checked) {
          ingredientes.push(document.getElementById('ingrediente3').value);
        }
        if (document.getElementById('ingrediente4').checked) {
          ingredientes.push(document.getElementById('ingrediente4').value);
        }
        if (document.getElementById('ingrediente5').checked) {
          ingredientes.push(document.getElementById('ingrediente5').value);
        }
        
        // Genera las recetas de cócteles que se pueden hacer con los ingredientes seleccionados
        var recetas = [];
        if (ingredientes.includes('limón') && ingredientes.includes('ron') && ingredientes.includes('hielo')) {
          recetas.push('Daiquirí: mezcle el ron, el jugo de limón y el hielo en una coctelera y cócteles para servir en un vaso con hielo.');
        }
        if (ingredientes.includes('limón') && ingredientes.includes('ron') && ingredientes.includes('hielo') && ingredientes.
        */

 
