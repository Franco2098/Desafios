//hola 

/* let numero = prompt("Ingresa un numero");

if (numero == 5) {

    console.log("Hola " + numero);

} else{
    console.log("Tu no eres " + numero);    
}
*/

/*let texto = "Nombre";
let numero = 123;
let boolean = 5 > 10;

console.log(typeof(texto));
console.log(typeof(numero));
console.log(typeof(boolean));
*/

/* 
Propuesta de ejercicio
- Según la edad del usuario imprimir los siguientes mensajes:
  · Menor o igual a 18 años: tienes toda una vida por delante. 
  · Mayor de 18 y menor o igual a 35: que grande que estás.
  · Mayor a 35 y menor o igual a 65: estás muy grande para andar con jueguitos.
  · En cualquier otro caso: que bueno que puedas dedicar tiempo a jugar.
*/


/*const YEAR = 2022;
let nombre = prompt(`Nombre`);
let anioNacimiento = prompt(`Año de nacimiento`);
let edad = YEAR - anioNacimiento;

let salida = `Bienvenido ${nombre} tienes ${edad} años.`;

if (edad <= 18) {
    alert(salida + " Tienes toda una vida por delante.");
}else if ((edad > 18) && (edad <= 35)) {
    alert(salida + " Que grande que estás.");
}else if ((edad > 35) && (edad <= 65)){
    alert(salida + " Estás muy grande para andar con jueguitos.");
}else 
    alert(salida + " Que bueno que puedas dedicar tiempo a jugar.");
    */

    /*for (let i = 0; i < 10; i++) {
         alert(i)
    }
*/

let entrada = prompt("Ingresa un numero: ")

while (entrada < 5) {
    alert(entrada);
    entrada = prompt("Ingresa otro numero: ");
}

// hola