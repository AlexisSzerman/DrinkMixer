// ============ SEGUNDA PRE-ENTREGA ================

// Arme un array vacío donde se van a pushear los ingredientes que el usuario ingresará por prompt

const ingredientes = [];
let cantidad = 2;

// Mediante el constructor arme los objetos que representan cada trago

function Tragos(nombre, base, diluyente) {
  this.nombre = nombre;
  this.base = base;
  this.diluyente = diluyente;
  this.receta = function () {
    console.log(
      "Esta es tu receta para un" +
        " " +
        this.nombre +
        ": " +
        this.base +
        " , " +
        this.diluyente
    );
  };
}

const ginTonic = new Tragos("Gin Tonic", "Gin = 2oz", "Tonica = 2.5oz");
const cubaLibre = new Tragos("Cuba Libre", "Ron = 2oz", "Coca-Cola = 2.5oz");
const vodkaTonic = new Tragos("Vodka Tonic", "Vodka = 2oz", "Tonica = 2.5oz");
const whiskeySour = new Tragos(
  "Whiskey Sour",
  "Whiskey = 2oz",
  "Jugo de limón = 2.5oz"
);

// Dentro del condicional estan los prompts que pushean al array vacío la base y el diluyente del cocktail

do {
  let base = prompt(
    "Ingresá la base de tu trago, puede ser Vodka, Ron, Gin, o Whiskey"
  );
  ingredientes.push(base);
  let diluyentes = prompt(
    "Ingresá un diuyente para tu trago, puede ser Coca-Cola, Sprite, Jugo de limón o Tonica"
  );
  ingredientes.push(diluyentes);
} while (ingredientes.length != cantidad);

//Un alert que muestra los ingredientes ingresados

alert(`Ingresaste ${ingredientes}`);

//Condicionales que van al array y se fijan si el usuario ingresó alguno de los ingredientes que incluyen las variables de cada cocktail y muestran por consola la receta correspondiente

if (
  ingredientes.includes("gin") ||
  (ingredientes.includes("Gin") && ingredientes.includes("tonica")) ||
  ingredientes.includes("Tonica") ||
  ingredientes.includes("tónica") ||
  ingredientes.includes("Tónica")
) {
  ginTonic.receta();
}

if (
  ingredientes.includes("vodka") ||
  (ingredientes.includes("Vodka") && ingredientes.includes("tonica")) ||
  ingredientes.includes("Tonica") ||
  ingredientes.includes("tónica") ||
  ingredientes.includes("Tónica")
) {
  vodkaTonic.receta();
}

if (
  ingredientes.includes("ron") ||
  (ingredientes.includes("Ron") && ingredientes.includes("coca")) ||
  ingredientes.includes("Coca") ||
  ingredientes.includes("Coca-Cola") ||
  ingredientes.includes("coca-cola")
) {
  cubaLibre.receta();
}

if (
  ingredientes.includes("Whiskey") ||
  (ingredientes.includes("whiskey") &&
    ingredientes.includes("jugo de limon")) ||
  ingredientes.includes("jugo") ||
  ingredientes.includes("Jugo de limon") ||
  ingredientes.includes("limon")
) {
  whiskeySour.receta();
}

//Método de filtro para buscar por nombre y por diluyente qué cocktails se pueden armar y se muestra por consola


//En un array de objetos se encuentran los cocktails y sus nombres, bases y diluyentes
const cocktails = [
  { nombre: "Gin Tonic", base: "Gin", diluyente: "Tonica" },
  { nombre: "Cuba Libre", base: "Ron", diluyente: "Coca Cola" },
  { nombre: "Vodka Tonic", base: "Vodka", diluyente: "Tonica" },
  { nombre: "Whiskey Sour", base: "Whiskey", diluyente: "Jugo de limon" },
];

// Nombro la variable que después usaré en el filtro y en la búsqueda

let busquedaDiluyente = prompt("Ingresa en la búsqueda un diluyente"); /*Hay que poner el exacto lo que aparece en el objeto*/
let busquedaNombre = prompt("Ingresa el nombre del Cocktail que estás buscando"); /*Hay que poner exacto exacto lo que aparece en el objeto*/

let resultadoDiluyente = cocktails.filter(
  (d) => d.diluyente === busquedaDiluyente
);
console.log(resultadoDiluyente);


let resultadoNombre = cocktails.find((d) => d.nombre === busquedaNombre);
console.log(resultadoNombre);
