// function saludar(){
//         let nombreDeUsuario = prompt("Por favor, ingresa tu nombre").toUpperCase();
//         let bienvenida = ("Hola " + nombreDeUsuario + " " + "¡Bienvenido!");

//         while(!isNaN(nombreDeUsuario)){
//             alert("El valor ingresado no es válido, ingrese su nombre correctamente")
//             nombreDeUsuario = prompt("Ingresa tu nombre").toUpperCase();
//         }
//         while((nombreDeUsuario == "") || (nombreDeUsuario==" "))
//         {
//         alert ("Ingresa un nombre válido por favor")
//         nombreDeUsuario = prompt("Ingresa tu nombre").toUpperCase();
//         }
//         if(nombreDeUsuario = nombreDeUsuario)
//         alert (bienvenida);
//     }
// saludar();

// function filtrarEspacio(){
//         let espacioDecorar = prompt("¿Que espacio te gustaría decorar? Ingresa el número que indique la opción elegida: 1- Comedor/Cocina 2- Habitación 3- Living 4- Baño 5- ¡Quiero ver ideas! ");

//         switch(espacioDecorar){
//             case "1" :
//                 alert("¡Genial! En nuestra tienda encontrarás objetos únicos para decorar tu comedor.")
//                 break;
//             case "2" :
//                 alert("¡Gran idea! Tener la habitación de tus sueños es posible  ¡Dirígete a nuestra tienda!")
//                 break;
//             case "3" :
//                 alert("Personalizá tu living con objetos únicos que se adapten a tu estilo ¡Encontralos en nuestra tienda!")
//                 break;
//             case "4" :
//                 alert("¡Nada mejor que un cuarto de baño con estilo! Es una excelente opción agregarle distintos elementos que le aporten diseño y practicidad.")
//                 break;
//             case "5":
//                 alert("¡Nada mejor que inspirarse en otros espacios que aportan ideas para nuestro lugar! Te invitamos a ver nuestro sitio y esperamos encuentres lo que estás buscando.")
//                 break;
//             default: alert("¡No elegiste una opción correcta!")
//             break;
//     }
//     }
// filtrarEspacio();

// let turnosDisponibles = 5;
//     function seleccionarTurno(turnosDisponibles){
//         for(let i = 1; i<= turnosDisponibles; i++)
//         {
//             console.log("Los turnos disponibles para hoy son: " + i)
//         }
//     }
//     seleccionarTurno(turnosDisponibles);


document.addEventListener("DOMContentLoaded", cargaInicial);

function cargaInicial(){
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
}


const BBDD = [
//tienda online productos de cocina

{
    "id": 1,
    "nombre": "Cuchillos diseño",
    "img": "imgcocina/cuchillos1.png",
    "descripcion": "Set de 3 cuchillos con diseño en colores combinados.",
    "precio": "$2500",
},
{
    "id": 2,
    "nombre": "Cuchillos bamboo",
    "img": "imgcocina/utensilios1.png",
    "descripcion": "Set de 5 cuchillos con mango de bamboo. Incluye tijera y soporte a medida.",
    "precio": "$3800",
},
{
    "id": 3,
    "nombre": "Soporte para cápsulas",
    "img": "imgcocina/capsulas1.png",
    "descripcion": "Soporte de pared para organizar cápsulas de café.",
    "precio": "$1900",
},
{
    "id": 4,
    "nombre": "Set condimentos",
    "img": "imgcocina/aceitera3.png",
    "descripcion": "Set de 4 piezas, ideal para condimentar ensaladas y todas tus comidas.",
    "precio": "$2600",
},
{
    "id": 5,
    "nombre": "Batería de cocina",
    "img": "imgcocina/bateria1.png",
    "descripcion": "Set de 3 sartenes, con interior de cerámica antiadherente.",
    "precio": "$4900",
},

]

let CARRITO = [] ;

function renderizarProductos(){

    const $tienda = document.getElementById("tienda");
    
    BBDD.forEach((p)=>{
            
            let producto = document.createElement("div")

            producto.innerHTML =`
            <img class="imagenDeMuestra" src="${p.img}" alt="">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <p>${p.precio}</p>
            <button id="${p.id}">Añadir al carrito</button>
            `
        $tienda.appendChild(producto);

        producto.querySelector("button").addEventListener("click", () =>{
            agregarAlCarrito(p.id)
        })

        }
        )

}
renderizarProductos();


function agregarAlCarrito(id){

    let producto = BBDD.find(producto => producto.id == id)

    let productoEnCarrito = CARRITO.find(producto => producto.id == id)

    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        producto.cantidad = 1;
        CARRITO.push(producto);
    }
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}


function renderizarCarrito(){
    const $carrito = document.getElementById("carrito");

    $carrito.innerHTML =" ";

    CARRITO.forEach((p, index)=>{
            
        let producto = document.createElement("div")

        producto.innerHTML =`
        <img class="imagenDeMuestra" src="${p.img}" alt="">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p>${p.precio}</p>
        <p>${p.cantidad}</p>
        <button id="${p.id}"> Eliminar del carrito </button>
        `
    $carrito.appendChild(producto);

    producto.querySelector("button").addEventListener("click", () =>{
        eliminarProductoDelCarrito(index);
    })
    })
    }


function eliminarProductoDelCarrito(indice){
    CARRITO[indice].cantidad --;

    if (CARRITO[indice].cantidad === 0){
        CARRITO.splice(indice, 1);
    }

    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}


function guardarCarritoEnLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(CARRITO));
}


function cargarCarritoDeLocalStorage(){
    if(localStorage.getItem("carrito") !== null){
        CARRITO = JSON.parse(localStorage.getItem("carrito"))
    }else{
        CARRITO = [];
    }
}


document.addEventListener("keyup", e => {
    if (e.target.matches(".filtro-carta")){
        document.querySelectorAll(".carta").forEach((tarjeta)=> {
        tarjeta.textContent.toLocaleLowerCase().includes(e.target.value)
        ? tarjeta.classList.remove("filter")
        : tarjeta.classList.add("filter");
    });
    if(e.key === "escape"){
        e.target.value ="";
    }
    }
})
