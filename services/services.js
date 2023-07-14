// import { filtrosCategorias } from '../js/submenu.js';


async function obtenerProductos() {

    const respuesta = await fetch (('././assets/bbdd.json'))
    
    const productos = await respuesta.json();
    
    return productos;
    
    
    }

    // filtrosCategorias();


export { obtenerProductos };

