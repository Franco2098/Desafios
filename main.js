alert("Bienvenido a Tenno Games")

do{
  numMenu = parseInt(prompt(`1. Mostrar productos
2. Elegir producto que desea comprar
3. Carrito
4. Quitar un producto del carrito
5. Elegir metodo de pago
6. Salir`))

switch (numMenu) {

    case 1:
      alert(` 1. ${product1.nombre} $${product1.precio}\n 2. ${product2.nombre} $${product2.precio} 
 3. ${product3.nombre} $${product3.precio}\n 4. ${product4.nombre} $${product4.precio}\n 5. ${product5.nombre} $${product5.precio}\n`);
      break;
    
    case 2:
      numProduct = parseInt(prompt ("Ingresa el numero del juego que quieres Comprar"));
      numProduct = validar(1,numProduct,5,"El numero ingresado no corresponde, Porfavor ingresa un numero nuevamente");
      
       if ((numProduct === 1) && (product1.cantidad != 0)) {
       cantProduct = prompt (`Del ${product1.nombre} hay ${product1.cantidad} unidades, eliga la cantidad que desea llevar`);
       cantProduct = validar(1,cantProduct,product1.cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
       carrito.push(`Juego: ${product1.nombre}, cantidad: ${cantProduct}, Precio: ${product1.precio * cantProduct}\n`);
       carrito1.push({id: 1, nombre: product1.nombre, cantidad: cantProduct, valor: product1.precio * cantProduct});
       product1.cantidad -= cantProduct; 
      } 
       else if ((numProduct === 2) && (product2.cantidad != 0)) {
        cantProduct = prompt (`Del ${product2.nombre} hay ${product2.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product2.cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
        carrito.push(`Juego: ${product2.nombre}, cantidad: ${cantProduct}, Precio: ${product2.precio * cantProduct}\n`);
        carrito1.push({id: 2, nombre: product2.nombre, cantidad: cantProduct, valor: product2.precio * cantProduct});
        product2.cantidad -= cantProduct;          
      }
       else if ((numProduct === 3) && (product3.cantidad != 0)){
        cantProduct = prompt (`Del ${product3.nombre} hay ${product3.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product3.cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
        carrito.push(`Juego: ${product3.nombre}, cantidad: ${cantProduct}, Precio: ${product3.precio * cantProduct}\n`);
        carrito1.push({id: 3, nombre: product3.nombre, cantidad: cantProduct, valor: product3.precio * cantProduct});
        product3.cantidad -= cantProduct;      
       }
       else if ((numProduct === 4) && (product4.cantidad != 0)){
        cantProduct = prompt (`Del ${product4.nombre} hay ${product4.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product4.cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
        carrito.push(`Juego: ${product4.nombre}, cantidad: ${cantProduct}, Precio: ${product4.precio * cantProduct}\n`);
        carrito1.push({id: 4, nombre: product4.nombre, cantidad: cantProduct, valor: product4.precio * cantProduct});
        product4.cantidad -= cantProduct;    
       }
       else if ((numProduct === 5) && (product5.cantidad != 0)) {
        cantProduct = prompt (`Del ${product5.nombre} hay ${product5.cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,product5.cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
        carrito.push(`Juego: ${product5.nombre}, cantidad: ${cantProduct}, Precio: ${product5.precio * cantProduct}\n`);
        carrito1.push({id: 5, nombre: product5.nombre, cantidad: cantProduct, valor: product5.precio * cantProduct});
        product5.cantidad -= cantProduct;  
       }
       else {
         alert("Disculpa pero ya no hay stock de ese producto")
         break;
       }

      alert("Perfecto ya seleccionaste tu/s juego/s.");
      break;
    
    case 3:
      if (carrito.length == 0){
        alert("No hay productos en el carrito")
        break;
      }
      alert(carrito.join(""));
      break;

    case 4:
       elim = parseInt(prompt(`Estos son los productos en tu carrito\n ${carrito.join("")} Ingresa el numero segun el orden en el carrito del producto que deseas eliminar`));
       elim = validar(1,elim,carrito.length,"El numero ingresado no corrsponde a ningun producto en tu carrito. Porfavor ingresa otro numero");
       elim -= 1
       carrito.splice(elim,1);

       if (carrito1[elim].id === 1) {
        product1.cantidad += carrito1[elim].cantidad 
        } 
        else if (carrito1[elim].id === 2) {
        product2.cantidad += carrito1[elim].cantidad           
        }
        else if (carrito1[elim].id === 3) {
        product3.cantidad += carrito1[elim].cantidad        
        }
        else if (carrito1[elim].id === 4) {
        product4.cantidad += carrito1[elim].cantidad        
        }
        else if (carrito1[elim].id === 5) {
        product5.cantidad += carrito1[elim].cantidad   
        }
       carrito1.splice(elim,1);
       break;

    case 5:
          if (carrito.length == 0){
          alert("No hay productos en el carrito")
          break;
          }
          alert(carrito.join(""));

          pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
         
          while ((pago.toLowerCase() != "credito")  && (pago.toLowerCase() !== "debito")) {
            alert("La opcion ingresada no corresponde a ningun metodo de pago");
            pago = prompt("Escriba la palabra segun el metodo de pago que desea usar, Debito, Credito");
        } 
         if (pago.toLowerCase() === "debito") {
          pagos();
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n ${carrito.join("")} Total Abonado ${cantTotal()} `);
          alert ("Gracias por tu compra");
          carrito.splice(0,carrito.length);
          carrito1.splice(0,carrito1.length);
          sumapre = 0
           
        }
         else if (pago.toLowerCase() === "credito"){
          pagos();
          cantTotal();
          cuota = parseInt(prompt("Puedes elegir pagar en 3 con interes del 10%, 6 con interes del 30% o 12 cuotas con interes del 60%"));
          alert (` Comprobante de pago\n ${nombre}\n ${dni}\n ${carrito.join("")} Total Abonado ${cuotas(cuota, sumapre)}`);
          alert ("Gracias por tu compra");
          carrito.splice(0,carrito.length);
          carrito1.splice(0,carrito1.length);          
          sumapre = 0
          
          
        }
      break;
    
    case 6:
      alert("Hasta luego vuelve cuando quieras")
      break;

}

  } while (numMenu !== 6)


  