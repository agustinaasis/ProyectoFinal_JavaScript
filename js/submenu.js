import { obtenerProductos } from '../services/services.js';
import { mostrarProductos } from './app.js';


const categoriasMenu = document.querySelector('li:nth-child(1) ');

const submenu = document.querySelector('.submenu');

categoriasMenu.addEventListener('click', () => {
    submenu.classList.toggle('hidden');

})


const cocina = document.querySelector('#cocina');

cocina.addEventListener('click', async() => {

    const PRODUCTOS = await obtenerProductos();

    const cocina = PRODUCTOS.filter(producto => producto.categoria === 'cocina');
    
    const contenedor = document.getElementById('contenedorProductos');

    contenedor.innerHTML = '';

    mostrarProductos(cocina);
});


const habitacion = document.querySelector('#habitacion');

habitacion.addEventListener('click', async() => {

    const PRODUCTOS = await obtenerProductos();

    const habitacion = PRODUCTOS.filter(producto => producto.categoria === 'habitacion');

    const contenedor = document.getElementById('contenedorProductos');

    contenedor.innerHTML = '';

    mostrarProductos(habitacion);
});


const living = document.querySelector('#living');

living.addEventListener('click', async() => {

    const PRODUCTOS = await obtenerProductos();

    const living = PRODUCTOS.filter(producto => producto.categoria === 'living');

    const contenedor = document.getElementById('contenedorProductos');

    contenedor.innerHTML = '';

    mostrarProductos(living);
});








