
let lista = document.createElement("div");
let lista1 = document.getElementById("Productos")



const mostrar = (array1) => {
    let indice = 0;
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
          <li class="list-group-item">Plataforma: ${product.plataforma}</li>
          <li class="list-group-item">Categoria: ${product.categoria}</li>
          <a href="#" class="btn btn-primary">Añadir al Carrito</a>
        </ul>
    </div>`;
    }
    lista1.append(lista);
    lista.className = "productStyle";
}

