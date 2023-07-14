import { mostrarProductos } from './app.js';



const categoriasMenu = document.querySelector('li:nth-child(1) ');

const submenu = document.querySelector('.submenu');

    categoriasMenu.addEventListener('click' , () => {
        submenu.classList.toggle('hidden');

})


function filtrosCategorias(PRODUCTOS) {
    
    const cocina = document.querySelector('#cocina');

    cocina.addEventListener('click', () => {

        const cocina = PRODUCTOS.filter(producto => producto.categoria === 'cocina');

        mostrarProductos(cocina);
    });


    const habitacion = document.querySelector('#habitacion');

    habitacion.addEventListener('click', () => {

        const habitacion = PRODUCTOS.filter(producto => producto.categoria === 'habitacion');

        mostrarProductos(habitacion);
    });


    const living = document.querySelector('#living');

    living.addEventListener('click', () => {

        const living = PRODUCTOS.filter(producto => producto.categoria === 'living');

        mostrarProductos(living);
    });

}


export { filtrosCategorias };




