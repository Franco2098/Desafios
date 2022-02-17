let lista = document.createElement("div");
let lista1 = document.getElementById("Productos");

const mostrar = (array1) => {
    for (const product of array1){
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
    lista1.append(lista);
    lista.id = "productStyle";
}



let error1 = document.getElementById("cuerpo");


const error = (imag) => {
  let divContainer = document.createElement("div")
  divContainer.style = "display: flex; justify-content: center; align-items: center; flex-direction: column; align-content: center; margin-top: 500px;"
  let img = document.createElement("img")
  img.src = imag
  let titulo = document.createElement("h1")
  titulo.innerHTML = "PRODUCTO NO ENCONTRADO"
  divContainer.append(img)
  divContainer.append(titulo)
  error1.append(divContainer)
  
}


