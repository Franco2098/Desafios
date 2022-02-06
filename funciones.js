
const validar = (numMin, num, numMax, msj) => {
    while ((numMin > num) || (num > numMax) || (isNaN (num) == true ) || (num == " ")){
        num = parseInt(prompt (msj))    
    }
    return parseInt(num)
}

const pagos = () => {
    nombre = prompt("Ingresa tu nombre completo")
    dni = prompt("Ingresa tu DNI")
    numTarj = prompt("Ingresa el numero de tarjeta")
    numPin = prompt("Ingresa el CVC")
    return (nombre, dni, numTarj, numPin)
}

const cuotas = (cantCuotas, pre) => {
    while ((cantCuotas !== 3)  && (cantCuotas !== 6) && (cantCuotas !== 12)) {
        alert ("El numero de cuotas ingresado no es el correcto")
        cantCuotas = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"))
    }
    if (cantCuotas === 3){
        total = pre * 1.1
    } else if (cantCuotas === 6) {
        total = pre * 1.3
    } else if (cantCuotas === 12){
        total = pre * 1.6
}
    return (total)
}

const cantTotal = () => {
    for (const productos of carrito1){
        sumapre += productos.valor
    } 
    return sumapre

}

