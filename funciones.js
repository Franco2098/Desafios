let lista = document.createElement("div");
let lista1 = document.getElementById("Productos");

const mostrar = (array1) => {
    for (const product of array1){
      if ((itemsCarrito !== null) && (itemsCarrito.find(product1 => product1.id == product.id)) !== undefined) {
        lista.innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="imagen">
            <img src= ${product.imagen} class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: $${product.precio}</li>
            <li class="list-group-item">Plataforma: ${product.plataforma.join("/")}</li>
            <li class="list-group-item">Categoria: ${product.categoria}</li>
            <button disabled = true id= "boton${product.id}" href="#" class="btn btn-primary">En Carrito</button>
          </ul>
        </div>`;
      }
      else{
        lista.innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="imagen">
            <img src= ${product.imagen} class="card-img-top" alt="...">
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: $${product.precio}</li>
            <li class="list-group-item">Plataforma: ${product.plataforma.join("/")}</li>
            <li class="list-group-item">Categoria: ${product.categoria}</li>
            <button id= "boton${product.id}" href="#" class="btn btn-primary">Añadir al Carrito</button>
          </ul>
        </div>`;
      }

    }
    lista1.append(lista);
    lista.id = "productStyle";
}


let error1 = document.getElementById("cuerpo");


const error = (imag) => {
  let divContainer = document.createElement("div");
  divContainer.id = "error"
  let img = document.createElement("img")
  img.src = imag
  let titulo = document.createElement("h1")
  titulo.innerHTML = "PRODUCTO NO ENCONTRADO"
  divContainer.append(img)
  divContainer.append(titulo)
  error1.append(divContainer)
  
}

const AñadirCarrito = (dat) => {
  let carro = document.getElementsByClassName("btn btn-primary");
  for (cart of carro) {
    cart.addEventListener("click", e => {
    e.target.innerText = "Producto Añadido";
    e.target.disabled = true;
    const selected = dat.find(product => `boton${product.id}` == e.target.id);
    nuevoArray2.push(selected);
    if (itemsCarrito !== null) {
      itemsCarrito.push(selected)
      localStorage.setItem("carro", JSON.stringify(itemsCarrito));
      itemsCarrito = JSON.parse(localStorage.getItem("carro"));
      let contador = document.getElementById("circulo");
      let cont = document.createElement("b");
      cont.innerHTML = itemsCarrito.length;
      $("#circulo").empty();
      contador.appendChild(cont);
      localStorage.setItem("cont", JSON.stringify(itemsCarrito.length));
    } 
    else{
      localStorage.setItem("carro", JSON.stringify(nuevoArray2));
      itemsCarrito = JSON.parse(localStorage.getItem("carro"));
      let contador = document.getElementById("circulo");
      let cont = document.createElement("b");
      cont.innerHTML = nuevoArray2.length;
      $("#circulo").empty();
      contador.appendChild(cont);
      localStorage.setItem("cont", JSON.stringify(nuevoArray2.length));
    }
    
    })
  }
}


let lista2 = document.createElement("div");
let lista3 = document.getElementById("Productos1");


const mostrar1 = (array1) => {
    for (const product of array1){
        lista2.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="imagen">
            <img src= ${product.imagen} class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Precio: $${product.precio}</li>
          <li class="list-group-item">Plataforma: ${product.plataforma.join("/")}</li>
          <li class="list-group-item">Categoria: ${product.categoria}</li>
          <button id= "boton${product.id}" href="#" class="btn btn-primary">Quitar del Carrito</button>
        </ul>
    </div>`;
    }
    lista3.append(lista2);
    lista2.id = "productStyle1";
}