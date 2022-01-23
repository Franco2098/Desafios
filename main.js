
let nombre = prompt ("Hola, Indicanos tu nombre");


while (nombre === ""){
    nombre = prompt("Por favor ingresa tu nombre");
    }

alert("Bienvenido " + nombre + " tendras que adivinar un numero del 1 al 10, si lo haces ganas");
alert("Tan solo cuentas con 3 intentos, piensa bien antes de elegir");
let num = parseInt (prompt ("Elije un numero del 1 al 10, a ver si hay suerte"));
const num1 = Math.round(Math.random(1,10) * (10-1) + 1);
console.log(num1)

for (let i = 1; i <= 3; i++){
        let num2 = 3 - i
        if (num === num1){
            alert("Felicidades " + nombre + " adivinaste en tu intento numero " + i + " , gracias por jugar");
            break
        } else if (i !== 3){
            alert("Que lastima, esta vez no acertaste. Te quedan " + num2 + " intentos" );
            num = parseInt (prompt ("Prueba con otro numero"));
        } else {
            alert("Que lastima, esta vez no acertaste. Te quedan " + num2 + " intentos" );
            alert("Espero tengas mas suerte la proxima");
        }
    }

        
