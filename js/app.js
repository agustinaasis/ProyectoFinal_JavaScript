import { obtenerProductos } from '../services/services.js';
import { toastify } from '../js/toastify.js';

const $carrito = document.querySelector(`#contador`);

async function obtenerYMostrarProductos() {

  const productos = await obtenerProductos();

  mostrarProductos(productos);
  
}

const cargaInicial = () => {

  obtenerCarritoDeLocalStorage();
  obtenerProductos();
  renderizarCarrito();
  obtenerYMostrarProductos();

}

document.addEventListener('DOMContentLoaded', cargaInicial);


let CARRITO = [];

function mostrarProductos(productos) {

  const contenedor = document.getElementById('contenedorProductos')

  productos.forEach((producto) => {

    const cardProducto = document.createElement("div");

    cardProducto.innerHTML = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-text titulo-producto"> ${producto.nombre} </h3>
            <img src= "${producto.imagen}" class="card-img-top imagen-tarjeta" alt="${producto.nombre}">
            <h4 class="card-text"> ${producto.precio} </h4>
            <p class="card-text descripcion"> ${producto.descripcion} </p>
            <button id="${producto.id}" class="card-link"> Agregar al carrito </button>
        </div>
        </div>
    `

    contenedor.appendChild(cardProducto)

    const btnAgregar = document.getElementById(`${producto.id}`)
    btnAgregar.addEventListener('click', () => {
      agregarAlCarrito(producto)
    })
  })
}


const agregarAlCarrito = (producto) => {

  const productoEnCarrito = CARRITO.find(item => item.id === producto.id);

  if (productoEnCarrito) {

    productoEnCarrito.cantidad++;

  } else {

    CARRITO.push({
      id: producto.id,
      imagen: producto.imagen,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    })
  }


  const totalCantidad = CARRITO.reduce((total, item) => total + item.cantidad, 0);
  $carrito.textContent = totalCantidad;

  toastify("Producto agregado al carrito", "success");

  renderizarCarrito();
  guardarCarritoEnLocalStorage();

}




const renderizarCarrito = () => {

  const $contenedorCarrito = document.querySelector('.contenedor_compras');

  $contenedorCarrito.innerHTML = '';


  CARRITO.forEach(producto => {

    const $div = document.createElement("div");
    $div.classList.add('tbody');

    const $div2 = document.createElement("div");
    $div2.classList.add('columna_1');

    const $img = document.createElement("img");
    $img.classList.add('img_cart');
    $img.src = producto.imagen;

    $div2.appendChild($img);
    $div.appendChild($div2);



    const $div3 = document.createElement("div");
    $div3.classList.add('columna_2');
    $div3.textContent = producto.nombre;

    $div.appendChild($div3);



    const $div4 = document.createElement("div");
    $div4.classList.add('columna_3');

    const $input = document.createElement("input");
    $input.type = 'number';
    $input.value = producto.cantidad;

    $div4.appendChild($input);

    $div.appendChild($div4);



    const $div5 = document.createElement("div");
    $div5.classList.add('columna_4');
    $div5.textContent = producto.precio;


    $div.appendChild($div5);



    const $div6 = document.createElement("div");
    $div6.classList.add('columna_5');



    const $button = document.createElement("button")
    $button.textContent = "X";

    $div6.appendChild($button);
    $div.appendChild($div6);


    $contenedorCarrito.appendChild($div);

    $button.addEventListener('click', () => {

      eliminarProducto(producto.id);
    })

    $input.addEventListener('change', () => {
      cambiarCantidad(producto.id, +($input.value));
      totalIndividual(producto.id, producto.precio, +($input.value));

    })

  })
}



const totalIndividual = (id, precio, cantidad) => {

  const producto = CARRITO.find(producto => producto.id === id);

  if (cantidad > 0) {

    producto.total = precio * cantidad;

  } else {

    eliminarProducto(id);
  }

  renderizarCarrito();

}



const eliminarProducto = (id) => {
  CARRITO = CARRITO.filter(producto => producto.id !== id);

  renderizarCarrito();
  guardarCarritoEnLocalStorage();
}


const guardarCarritoEnLocalStorage = () => {
  localStorage.setItem('carrito', JSON.stringify(CARRITO));
}


const obtenerCarritoDeLocalStorage = () => {
  if (localStorage.getItem('carrito')) {
    CARRITO = JSON.parse(localStorage.getItem('carrito'));
  } else {
    CARRITO = [];
  }

}

const cambiarCantidad = (id, cantidad) => {

  const producto = CARRITO.find(producto => producto.id === id);

  producto.cantidad = cantidad;

  renderizarCarrito();

  guardarCarritoEnLocalStorage();

}

export { mostrarProductos }














