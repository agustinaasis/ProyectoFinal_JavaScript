const categoriasMenu = document.querySelector(`li:nth-child(1)`);

const submenu = document.querySelector(`.submenu`);

categoriasMenu.addEventListener(`click` , () => {
    submenu.classList.toggle(`hidden`);
})

const filtroCategorias = (PRODUCTOS) => {

    const cocina = document.querySelector(`#cocina`);
    cocina.addEventListener(`click` , () => {
        const cocina = PRODUCTOS.filter(producto => producto.categoria === `Cocina`);
    })
    console.log(cocina)


    const habitacion = document.querySelector(`#habitacion`);
    habitacion.addEventListener(`click` , () => {
        const habitacion = PRODUCTOS.filter(producto => producto.categoria === `Habitacion`);
    })
    console.log(habitacion)


    const living = document.querySelector(`#living`);
    living.addEventListener(`click` , () => {
        const living = PRODUCTOS.filter(producto => producto.categoria === `Living`);
    })
    console.log(living)

}

export { filtroCategorias }

