alert("Bienvenido a Tenno Games");

do{
  numMenu = parseInt(prompt(`1. Mostrar productos
2. Buscar un producto
3. Filtrar productos de la misma categoria  
4. Elegir producto que desea comprar
5. Carrito
6. Quitar un producto del carrito
7. Elegir metodo de pago
8. Salir`));

switch (numMenu) {

    case 1:
      mostrar(arrayAlert, productos);
      alert(arrayAlert.join(""));
      arrayAlert.splice(0,arrayAlert.length);
      break;
    
    case 2:
       buscar = prompt("Ingrese el nombre del juego que desea buscar");
       let resultado = productos.find((el) => 
       {let element = el.nombre.toLowerCase()
        let element1 = buscar.toLowerCase() 
        if (element == element1){
          return el.nombre
        }
      })

       if (resultado == undefined){
         alert("No se encontro ninguna coincidencia");
       }
       else {
         alert(`${resultado.id} - Nombre: ${resultado.nombre} - Cantidad: ${resultado.cantidad} - Precio: ${resultado.precio}\n`);
       }
       break;
      
    case 3:
      filtrar = prompt("Ingrese una categoria de videojuegos");
      let resultado1 = productos.filter((el) => el.categoria.includes(filtrar));

      if (resultado1.length == 0){
        alert("No se encontro ninguna coincidencia");
      }
      else {
        juegos = ""
        for (const product of resultado1){ 
          juegos += (`${product.id} - Nombre: ${product.nombre} - Cantidad: ${product.cantidad} - Precio: ${product.precio}\n`);
        }
        alert(juegos)
      }
      break;

    case 4:
      numProduct = parseInt(prompt (`Ingresa el numero del juego que quieres Comprar`));
      numProduct = validar(1,numProduct,5,"El numero ingresado no corresponde, Porfavor ingresa un numero nuevamente");
      numProduct -= 1;

      if (productos[numProduct].cantidad !=0){
        cantProduct = prompt (`Del ${productos[numProduct].nombre} hay ${productos[numProduct].cantidad} unidades, eliga la cantidad que desea llevar`);
        cantProduct = validar(1,cantProduct,productos[numProduct].cantidad, "La cantidad de productos ingresada no corresponde, por favor ingresa nuevamente la cantidad");
        carrito1.push({id: productos[numProduct].id, nombre: productos[numProduct].nombre, cantidad: cantProduct, precio: productos[numProduct].precio * cantProduct});
        productos[numProduct].cantidad -= cantProduct;
      }
      else {
         alert("Disculpa pero ya no hay stock de ese producto");
         break;
       }

      alert("Perfecto ya seleccionaste tu/s juego/s.");
      break;
    
    case 5:
      if (carrito1.length == 0){
        alert("No hay productos en el carrito");
        break;
      }
      mostrar(carrito, carrito1);
      alert(carrito.join(""));
      carrito.splice(0,carrito.length);
      break;

    case 6:
      if (carrito1.length == 0){
        alert("No hay productos en el carrito")
        break;
      }  
       mostrar(carrito, carrito1);
       elim = parseInt(prompt(`Estos son los productos en tu carrito\n ${carrito.join("")}Ingresa el numero segun el orden en el carrito del producto que deseas eliminar`));
       elim = validar(1,elim,carrito.length,"El numero ingresado no corrsponde a ningun producto en tu carrito. Porfavor ingresa otro numero");
       elim -= 1;
       productos[elim].cantidad += carrito1[elim].cantidad;
       carrito1.splice(elim,1);
       carrito.splice(0,carrito.length);
       break;

    case 7:
          if (carrito1.length == 0){
          alert("No hay productos en el carrito")
          break;
          }
          mostrar(carrito, carrito1);
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
    
    case 8:
      alert("Hasta luego vuelve cuando quieras")
      break;

}

  } while (numMenu !== 8)


  