
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
  error("./imag/remove.png")
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

// Alert de compra finalizada. Vacia el storage y redirecciona a la pagina principal despues de 3 seg.

const ter = () => {
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

