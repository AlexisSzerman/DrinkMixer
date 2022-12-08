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

