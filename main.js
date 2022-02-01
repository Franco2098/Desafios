alert("Bienvenido a Tenno Games")

do{
  numMenu = parseInt(prompt(`1. Mostrar productos
2. Elegir producto que desea comprar
3. Elegir metodo de pago
4. Salir`))

switch (numMenu) {

    case 1:
      alert(` 1. ${product1.nombre} $${product1.precio}\n 2. ${product2.nombre} $${product2.precio} 
 3. ${product3.nombre} $${product3.precio}\n 4. ${product4.nombre} $${product4.precio}\n 5. ${product5.nombre} $${product5.precio}\n`);
      break;
    
    case 2:
      numProduct = parseInt(prompt ("Ingresa el numero del juego que quieres Comprar"));
      numProduct = validar(1,numProduct,5);
      
      if ((numProduct === 1) && (product1.cantidad != 0)) {
      cantProduct = prompt (`Del ${product1.nombre} hay ${product1.cantidad} unidades, eliga la cantidad que desea llevar`);
      cantProduct = validar(1,cantProduct,product1.cantidad);
      } 
       else if ((numProduct === 2) && (product2.cantidad != 0)) {
        cantProduct = prompt (`Del ${product2.nombre} hay ${product2.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product2.cantidad);
      }
       else if ((numProduct === 3) && (product3.cantidad != 0)){
        cantProduct = prompt (`Del ${product3.nombre} hay ${product3.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product3.cantidad);
       }
       else if ((numProduct === 4) && (product4.cantidad != 0)){
        cantProduct = prompt (`Del ${product4.nombre} hay ${product4.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product4.cantidad);
       }
       else if ((numProduct === 5) && (product5.cantidad != 0)) {
        cantProduct = prompt (`Del ${product5.nombre} hay ${product5.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product5.cantidad);
       }
       else {
         alert("Disculpa pero ya no hay stock de ese producto")
         break;
       }

      alert("Perfecto ya seleccionaste tu juego. Ahora elige la opcion 3 para pagar.");
      break;

    case 3:
      if (numProduct === 1) {
          alert(`En su carrito hay ${cantProduct} unidad/es del ${product1.nombre}`);
          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
         
          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos();
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product1.nombre}\n $${cantProduct * product1.precio}`);
          alert ("Gracias por tu compra");
          product1.cantidad -= cantProduct; 
        }
         else if (pago.toLowerCase() === "credito"){
          pagos();
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          cuotas (cuota, cantProduct, product1.precio);
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product1.nombre}\n $${total}`);
          alert ("Gracias por tu compra");
          product1.cantidad -= cantProduct; 
        }
      }
         else if (numProduct === 2) {
          alert(`En su carrito hay ${cantProduct} unidad/es del ${product2.nombre}`);
          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");

          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos();
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product2.nombre}\n $${cantProduct * product2.precio}`);
          alert ("Gracias por tu compra");
          product2.cantidad -= cantProduct;
        }
         else if (pago.toLowerCase() === "credito"){
          pagos();
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          cuotas (cuota, cantProduct, product2.precio);
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product2.nombre}\n $${total}`);
          alert ("Gracias por tu compra");
          product2.cantidad -= cantProduct; 
        }
      }
         else if (numProduct === 3) {
          alert(`En su carrito hay ${cantProduct} unidad/es del ${product3.nombre}`);
          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");

          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos();
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product3.nombre}\n $${cantProduct * product3.precio}`);
          alert ("Gracias por tu compra");
          product3.cantidad -= cantProduct; 
        }
         else if (pago.toLowerCase() === "credito"){
          pagos();
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          cuotas (cuota, cantProduct, product3.precio);
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product3.nombre}\n $${total}`);
          alert ("Gracias por tu compra");
          product3.cantidad -= cantProduct; 
         }
      }
         else if (numProduct === 4) {
          alert(`En su carrito hay ${cantProduct} unidad/es del ${product4.nombre}`);
          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");

          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos()
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product4.nombre}\n $${cantProduct * product4.precio}`);
          alert ("Gracias por tu compra");
          product4.cantidad -= cantProduct; 
        }
         else if (pago.toLowerCase() === "credito"){
          pagos();
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          cuotas (cuota, cantProduct, product4.precio);
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product4.nombre}\n $${total}`);
          alert ("Gracias por tu compra");
          product4.cantidad -= cantProduct; 
        }
      }
         else if (numProduct === 5) {
          alert(`En su carrito hay ${cantProduct} unidad/es del ${product5.nombre}`);
          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");

          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos();
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product5.nombre}\n $${cantProduct * product5.precio}`);
          alert ("Gracias por tu compra");
          product5.cantidad -= cantProduct; 
        }
         else if (pago.toLowerCase() === "credito"){
          pagos()
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          cuotas (cuota, cantProduct, product5.precio);
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n cantidad ${cantProduct}\n ${product5.nombre}\n $${total}`);
          alert ("Gracias por tu compra");
          product5.cantidad -= cantProduct; 
         }
      }
      break;
    
    case 4:
      alert("Hasta luego vuelve cuando quieras")
      break;

}

  } while (numMenu !== 4)


  