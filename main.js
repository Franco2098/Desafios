
mostrar(productos);

if ( itemsCarrito !== null) {
  let contador = document.getElementById("circulo");
  let cont = document.createElement("b");
  cont.innerHTML = itemsCarrito.length;
  contador.appendChild(cont);
}


//Filtra por categoria

let categoria = document.getElementsByClassName("dropdown-item");
for (cat of categoria) {
  cat.addEventListener("click", e => {
  $("#productStyle").empty();
  const selected = productos.filter(product => product.categoria == e.target.id);
  mostrar(selected);
  AñadirCarrito()
  })
}

//Filtra por plataforma

let plataforma = document.getElementsByClassName("dropdown-item 1");
for (plat of plataforma) {
  plat.addEventListener("click", e => { 
  $("#productStyle").empty();
  const recorrer = productos.map((el) => {
    for (let l of el.plataforma){
      if (l == e.target.id){
        nuevoArray.push(el);
      } 
    }
  }
  )
  mostrar(nuevoArray);
  nuevoArray.splice(0,nuevoArray.length);
  AñadirCarrito()
  })
}
  


// Añadir al carrito


AñadirCarrito()


//Barra de busqueda

let teclado = document.getElementById("buscador");
let buscar = document.getElementById("buscador2");
buscar.addEventListener("click", () => {
  const selected1 = productos.filter(item => {
    if (item.nombre.toLowerCase().includes(teclado.value.toLowerCase())){
      return item
    }
  });
  if (selected1.length > 0){
    $("#productStyle").empty();
    $("#cuerpo").empty();
    mostrar(selected1)
    AñadirCarrito()
  }
  else{
    $("#productStyle").empty();
    $("#cuerpo").empty();
    error("./imag/remove.png")
    
  }
  
})

