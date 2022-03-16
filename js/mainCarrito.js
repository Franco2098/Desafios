
itemsCarrito = JSON.parse(localStorage.getItem("carro"));



// Consulta si hay items en el carrito y los muestra 

if ( itemsCarrito !== null) {
    mostrar1(itemsCarrito);
    let contador = document.getElementById("circulo");
    let cont = document.createElement("b");
    cont.innerHTML = itemsCarrito.length;
    contador.appendChild(cont);
}
else{
  error("./asset/remove.png")
  document.getElementById("Terminar").style.display = "none";
}

//Eliminar productos del carrito

let carro1 = document.getElementsByClassName("btn btn-primary");
for (car1 of carro1) {
    car1.addEventListener("click", e => {
    let eliminar = itemsCarrito.filter(el => e.target.id.slice(-1) != el.id);
    itemsCarrito = eliminar
    

    if (itemsCarrito.length !== 0){
        localStorage.setItem("carro", JSON.stringify(itemsCarrito))
        
    }
    else {
        localStorage.removeItem("carro")
    }
    location.href = "./carrito.html"
   
})
}

// Alert para finalizar la compra . Vacia el storage y redirecciona a la pagina principal despues de 3 seg.

let metodoPago = ""

const ter = () => {
    let suma = 0
    for (items of itemsCarrito){
        suma += items.precio
    }

    Swal.fire({
    title: 'Registro',
    html:
      '<input style= "width:300px" placeholder="Ingresa tu nombre completo" id="swal-input1" class="swal2-input">' +
      '<input style= "width:300px" placeholder="Ingresa tu DNI" id="swal-input2" class="swal2-input">' +
      '<input style= "width:300px" placeholder="Ingresa tu email" id="swal-input3" class="swal2-input">' +
      '<input style= "width:300px" placeholder="Ingresa tu telefono" id="swal-input4" class="swal2-input">' +
      '<select style= "width:300px" id="swal-input5" class="swal2-input" > <option> Elige una opcion (con credito tenes un 10% de interes) </option> <option> Credito </option> <option> Debito </option> </select>',
    focusConfirm: false,
    preConfirm: () => {
        document.getElementById('swal-input1').value
        document.getElementById('swal-input2').value
        document.getElementById('swal-input3').value
        document.getElementById('swal-input4').value
        metodoPago = document.getElementById('swal-input5').value
    }
  }).then(function() {
    if (metodoPago === "Credito") {
        Swal.fire({
            title: 'Tarjeta de Credito',
            html:
                '<input style= "width:300px" placeholder="Ingresa número de tarjeta" id="swal-input6" class="swal2-input">' +
                '<input style= "width:300px" placeholder="Ingresa fecha de caducidad" id="swal-input7" class="swal2-input">' +
                '<input style= "width:300px" placeholder="Ingresa el CVV" id="swal-input8" class="swal2-input">',
        }).then(function() {
            Swal.fire({
                title: 'Confirmar compra',
                text: `Total a pagar $${Math.round(suma*1.1)}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Confirmar Pago",
                cancelButtonText: "Volver al Carrito"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Genial!',
                        text: 'Tu compra se realizo con exito',
                        icon: 'success',
                        timer: 3000,
                        showConfirmButton: false
                    }).then(function() {
                        window.location = "./index.html";
                        }) 
                        localStorage.clear()   
                }
            })        
        })
    } else if (metodoPago === "Debito") {
        Swal.fire({
            title: 'Tarjeta de Debito', 
            html:
                '<input style= "width:300px" placeholder="Ingresa número de tarjeta" id="swal-input9" class="swal2-input">' +
                '<input style= "width:300px" placeholder="Ingresa fecha de caducidad" id="swal-input10" class="swal2-input">' +
                '<input style= "width:300px" placeholder="Ingresa el CVV" id="swal-input11" class="swal2-input">',
        }).then(function() {
            Swal.fire({
                title: 'Confirmar compra',
                text: `Total a pagar $${suma}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Confirmar Pago",
                cancelButtonText: "Volver al Carrito"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Genial!',
                        text: 'Tu compra se realizo con exito',
                        icon: 'success',
                        timer: 3000,
                        showConfirmButton: false
                    }).then(function() {
                        window.location = "./index.html";
                        }) 
                        localStorage.clear()   
                }
            })
        })
    } else {
        Swal.fire({
            title: 'Ha ocurrido un error',
            text: 'Tu compra no se pudo realizar, faltan datos',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false
        })
    }

})
}


