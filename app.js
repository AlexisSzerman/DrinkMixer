
/*
let bases = [];
let diluyentes = [];

bases.push (prompt ("Agregá una espirituosa (Vodka, Ron, Gin, Tequila o Whiskey)"))
diluyentes.push (prompt ("Agregá un  diluyente (Coca, Sprite, Jugo de naranja o Tonica)"))

let coctelera = bases.concat(diluyentes);
/* console.log(coctelera) */

/*
//Para saber que ingredientes agregué
for (let i=0; i<=10; i++) {
  console.log (coctelera [i])
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




/* Opcion chat gpt

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
