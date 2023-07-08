import { obtenerProductos } from "../services/services.js";

obtenerProductos();


const cargaInicial = () => {
  obtenerProductos();
}

document.addEventListener(`DOMContentLoaded`, cargaInicial);


let CARRITO = [];


async function mostrarProductos() {

  const productos = await obtenerProductos()

  const contenedor = document.getElementById (`contenedorProductos`)

  productos.forEach((producto) => {

    const cardProducto = document.createElement("div");

    cardProducto.innerHTML = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-text titulo-producto"> ${producto.nombre} </h3>
            <img src= "${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <h4 class="card-text"> ${producto.precio} </h4>
            <p class="card-text descripcion"> ${producto.descripcion} </p>
            <button id="${producto.id}" class="card-link"> Agregar al carrito </button>
        </div>
        </div>
    `

    contenedor.appendChild(cardProducto)

    const btnAgregar = document.getElementById(`${producto.id}`)
    btnAgregar.addEventListener("click" , () => agregarAlCarrito(producto.id) )

        })

  }


mostrarProductos()


const agregarAlCarrito = (producto) => {


  const productoEnCarrito = CARRITO.find (item => item.id === producto.id);

  if (productoEnCarrito){

    productoEnCarrito.cantidad++;

  }else{

    CARRITO.push({
      id : producto.id,
      nombre : producto.nombre,
      precio : producto.precio,
      imagen : producto.imagen,
      cantidad : 1
    })
  }

  renderizarCarrito();
  
}


const renderizarCarrito = () => {

  const $contenedorCarrito = document.querySelector(`.contenedor_compras`);
  

  CARRITO.forEach(producto => {

    const $div = document.createElement("div");
    $div.classList.add(`tbody`);

    const $div2 = document.createElement("div");
    $div2.classList.add(`columna_1`);

    const $img = document.createElement("img");
    $img.classList.add(`img_cart`);
    $img.src = producto.imagen;

    $div2.appendChild($img);
    $div.appendChild($div2);


    const $div3 = document.createElement("div");
    $div.classList.add(`columna_2`);
    $div3.textContent = producto.nombre;

    $div.appendChild($div3);

    const $div4 = document.createElement("div");
    $div.classList.add(`columna_3`);

    const $input = document.createElement(`ìnput`);
    $input.type = `number`;
    $input.value = producto.cantidad;

    $div4.appendChild($input);

    $div.appendChild($div4);

    const $div5 = document.createElement("div");
    $div.classList.add(`columna_4`);
    $div5.textContent = `${producto.precio * producto.cantidad}`;


    $div.appendChild($div5);

    const $div6 = document.createElement("div");
    $div.classList.add(`columna_5`);

    const $button = document.createElement(`button`)
    $button.textContent = "X"

    $div6.appendChild($button);
    $div.appendChild($div6);

    $contenedorCarrito.appendChild($div);


  })
}



const totalIndividual =(id, precio, cantidad) => {
  const producto = CARRITO.find(producto => producto.id === id);

  if(cantidad > 0){

    producto.total = precio*cantidad;

  }else{

    eliminarProducto (id);
  }
}

const eliminarProducto = (id) => {
  CARRITO = CARRITO.filter(producto => producto.id !== id);

  renderizarCarrito();
}
