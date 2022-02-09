
const validar = (numMin, num, numMax, msj) => {
    while ((numMin > num) || (num > numMax) || (isNaN (num) == true ) || (num == " ")){
        num = parseInt(prompt (msj))    
    }
    return parseInt(num)
}

const validarTarj = (numMin, num, numMax, msj) => {
    while ((numMin > num.toString().length) || (num.toString().length > numMax) || (isNaN (num) == true ) || (num == " ")){
        num = parseInt(prompt (msj))    
    }
    return parseInt(num)
}

const pagos = () => {
    nombre = prompt("Ingresa tu nombre completo");
    while ((nombre == " ") || (isNaN (nombre) == false)){
        nombre = prompt("Ingresa tu nombre nuevamente porfavor")
    }
    dni = parseInt(prompt("Ingresa tu DNI"));
    validarTarj (7,dni,8,"El DNI no es correcto. Ingresalo nuevamente")
    numTarj = parseInt(prompt("Ingresa el numero de tarjeta"));
    validarTarj (16,numTarj,16,"El numero de tarjeta es incorrecto. Ingresalo nuevamente")
    numPin = parseInt(prompt("Ingresa el CVC"));
    validarTarj (3,numPin,3,"El CVC no es correcto. Porfavor ingresalo nuevamente")
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
    return (Math.round(total))
}

const cantTotal = () => {
    for (const product of carrito1){
        sumapre += product.precio
    } 
    return sumapre

}

const mostrar = (array1, array2) => {
    let indice = 0;
    for (const product of array2){
        indice += 1; 
        array1.push(`${indice} - Nombre: ${product.nombre} - Cantidad: ${product.cantidad} - Precio: ${product.precio}\n`)
    }
}