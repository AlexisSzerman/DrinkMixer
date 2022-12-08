let bases = [];
let diluyentes = [];

bases.push (prompt ("Agregá una espirituosa (Vodka, Ron, Gin, Tequila o Whiskey)"))
diluyentes.push (prompt ("Agregá un  diluyente (Coca, Sprite, Jugo de naranja o Tonica)"))

let coctelera = bases.concat(diluyentes);
/* console.log(coctelera) */


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