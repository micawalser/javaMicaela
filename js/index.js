

//precio cuota
const precioCuota = 7500;

//limite de personas para el descuento
const limitePersonas = 6;

//descuentos
const noDiscount = 1;
const descuentoUno = (1 - 0.10);
const descuentoDos = (1 - 0.20);
const decuentoTres = (1 - 0.35);

//TAX
const tax = 1;


/* BIENVENIDA*/
alert("Bienvenido a VIKEN GYM, Nos alegra que quieras asociarte");

let nameEntered = prompt("Por favor, ingresa tu nombre:");

alert(`Hola ${nameEntered}, es un gusto!`);

alert(`El precio de la cuota mensual es de $7500. 
  
Pero tambien hay descuentos
plan pareja 10% de descuento cada uno
plan familiar 20% de descuento cada uno (hasta 6) `);

/*pareja queda en 6750 c/u
familia queda en 6000 c/u*/

let cantidadPersonas = parseInt(prompt("Cuantos quisieran asociarse?"));


/* BUCLE */
while (cantidadPersonas > limitePersonas  ) { 
    alert(`Error, el limite de personas es de 6`);
    cantidadPersonas = prompt("Please enter another number:");
  }
 

//FUNCION Y CONDICIONAL 
function priceCalculator(cantidadPersonas, precioCuota, noDiscount, descuentoUno, descuentoDos, decuentoTres, tax) {
  if (cantidadPersonas > 0 && cantidadPersonas <= 1) {
    let finalPrice = (cantidadPersonas * precioCuota * noDiscount * tax)
    return finalPrice.toFixed(2);
  }
  else if (cantidadPersonas >= 2 && cantidadPersonas < 3) {
    let finalPrice = (cantidadPersonas * precioCuota * descuentoUno * tax)
    return finalPrice.toFixed(2);
  }
  else if (cantidadPersonas >= 3 && cantidadPersonas <= 6) {
    let finalPrice = (cantidadPersonas * precioCuota * descuentoDos * tax)
    return finalPrice.toFixed(2);
  }
  else ( cantidadPersonas =0 && cantidadPersonas <= 0)
{
   alert ("error, ingresar un numero");
  }
}

/* FINAL */
alert("El total del precio final  es de: $" + priceCalculator(cantidadPersonas, precioCuota, noDiscount, descuentoUno, descuentoDos, decuentoTres, tax));


let numero = prompt("Si usted desea continuar con la asociacion, ingrese su numero: ")
console.log (numero);



alert("Gracias por tu visita! en breve nos estaremos comunicando con usted, que tenga buen dia.");