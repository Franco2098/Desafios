
mostrar(productos);

//Filtra por categoria

let categoria = document.getElementsByClassName("dropdown-item");
for (cat of categoria) {
  cat.addEventListener("click", e => { 
  $("#productStyle").empty();
  const selected = productos.filter(product => product.categoria == e.target.id);
  mostrar(selected);
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
  })
}

// Añadir al carrito

let carro = document.getElementsByClassName("btn btn-primary");
for (cart of carro) {
  cart.addEventListener("click", e => {
  e.target.innerText = "Producto Añadido";
  e.target.disabled = true;
  const selected = productos.find(product => `boton${product.id}` == e.target.id);
  nuevoArray2.push(selected);
  let contador = document.getElementById("circulo");
  let cont = document.createElement("b");
  cont.innerHTML = nuevoArray2.length;
  $("#circulo").empty();
  contador.appendChild(cont);
  })
}

// Mostrar Carrito

let mostCarro = document.getElementById("car");
  mostCarro.addEventListener("click", () => { 
  if (nuevoArray2.length > 0){
  $("#productStyle").empty();
  mostrar(nuevoArray2);
  let carro1 = document.getElementsByClassName("btn btn-primary");
  for (car1 of carro1) {
  car1.innerText = "Quitar del Carrito"
  } 
  }
  
  else{
    $("#productStyle").empty();
    $("#cuerpo").empty();
    error("./imag/remove.png")
    
  }
})


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
    console.log(selected1)
    mostrar(selected1)
  }
  else{
    $("#productStyle").empty();
    $("#cuerpo").empty();
    error("./imag/remove.png")
    
  }
  
})