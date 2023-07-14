async function obtenerProductos() {

    const respuesta = await fetch (('././assets/bbdd.json'))
    
    const productos = await respuesta.json();
    
    return productos;
    
    }


export { obtenerProductos };
