async function obtenerProductos() {

    const respuesta = await fetch('././assets/bbdd.json');

    const productos = await respuesta.json();

    return productos;
<<<<<<< HEAD
    
    }

=======

}
>>>>>>> 42ba82f5bc44da6c2ede7d3470fff00eb0dc2a2c

export { obtenerProductos };
