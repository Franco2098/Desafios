fetch('base.json')
    .then( (res) => res.json())
    .then( (data) => {

mostrar(data);
    

//Consulta si hay productos en el carrito y notifica la cantidad

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
  const selected = data.filter(product => product.categoria == e.target.id);
  mostrar(selected);
  AñadirCarrito(data)
    
  })
}

//Filtra por plataforma

let plataforma = document.getElementsByClassName("dropdown-item 1");
for (plat of plataforma) {
  plat.addEventListener("click", e => { 
  $("#productStyle").empty();
  data.map((el) => {
    for (let l of el.plataforma){
      if (l == e.target.id){
        nuevoArray.push(el);
      } 
    }
  }
  )
  mostrar(nuevoArray);
  nuevoArray.splice(0,nuevoArray.length);
  AñadirCarrito(data)
  
  })
}
  


// Añadir al carrito


AñadirCarrito(data)


//Barra de busqueda

let teclado = document.getElementById("buscador");
let buscar = document.getElementById("buscador2");
buscar.addEventListener("click", () => {
  const selected1 = data.filter(item => {
    if (item.nombre.toLowerCase().includes(teclado.value.toLowerCase())){
      return item
    }
  })
  if (selected1.length > 0){
    $("#productStyle").empty();
    $("#cuerpo").empty();
    mostrar(selected1)
    AñadirCarrito(data)
  }
  else{
    $("#productStyle").empty();
    $("#cuerpo").empty();
    error("./imag/remove.png")
    
  }
  
})


})

