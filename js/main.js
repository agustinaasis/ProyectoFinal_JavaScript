/// LUIS: En la siguiente función me pasa que si le agrego el isNaN no me dice los alert siguientes, no toma el valor y se cierra el cuadro de "alert". Otra cosa es que, al ingresas un valor no válido, el cuadro se cierra y ya no vuelve a pedir los datos, por eso es que pensé en un ciclo while como el que le sigue a este primer intento////

// function saludar(){
//     let nombreDeUsuario = (prompt("Por favor, ingresa tu nombre")).toLocaleUpperCase();
//     let bienvenida = "Hola " + nombreDeUsuario + " " + "¡Bienvenida!"

//     if(nombreDeUsuario == ""){
//         alert("El valor ingresado no es válido")
//     }else if(nombreDeUsuario == " "){
//         alert("El valor ingresado no es válido")
//         }
//     else{
//         alert(bienvenida);
//     }
// }
// saludar();


/// Funcion para saludar, con ciclo while para que vuelva a pedirle al usuario que ingrese su nombre en el prompt. Esta me parece la forma más adecuada de hacerlo, pero no logro ponerle el isNaN para que el usuario NO ingrese números en el prompt ////

function saludar(){
    let nombreDeUsuario = prompt("Por favor, ingresa tu nombre").toUpperCase();
    let bienvenida = ("Hola, " + nombreDeUsuario + " " + "¡Bienvenida!")

    while((nombreDeUsuario == "") || (nombreDeUsuario==" "))
    {
    alert ("Ingresa un nombre válido por favor")
    nombreDeUsuario = prompt("Por favor, ingresa tu nombre").toUpperCase();
    }
    if(nombreDeUsuario = nombreDeUsuario)
    alert (bienvenida);
}
saludar();


// function filtrarEspacio(){
//     let espacioDecorar = prompt("¿Que espacio te gustaría decorar? Ingresa el número que señale la opción correcta: 1- Comedor/Cocina 2- Habitación 3- Living 4- Baño 5- ¡Quiero ver ideas! ")

//     switch(espacioDecorar){
//         case "1" :
//             return("¡Genial! En nuestra tienda encontrarás objetos únicos para decorar tu comedor.")
//         case "2" :
//             alert("¡Gran idea! Tener la habitación de tus sueños es posible  ¡Dirígete a nuestra tienda!")
//             break;
//         case "3" :
//             alert("Personalizá tu living con objetos únicos que se adapten a tu estilo ¡Encontralos en nuestra tienda!")
//             break;
//         case "4" :
//             alert("¡Nada mejor que un cuarto de baño con estilo! Es una excelente opción agregarle distintos elementos que le aporten diseño y practicidad.")
//             break;
//         case "5":
//             alert("¡Nada mejor que inspirarse en otros espacios que aportan ideas para nuestro lugar! Te invitamos a ver nuestro sitio y esperamos encuentres lo que estás buscando.")
//             break;
//         default: alert("¡No elegiste una opción correcta!")
//             break;
// }
// }
// filtrarEspacio();

// let turnosDisponibles = 5;
// function seleccionarTurno(turnosDisponibles){
//     for(let i = 1; i<= turnosDisponibles; i++)
//     {
//         console.log("Los turnos disponibles para hoy son: " + i)
//     }
// }
// seleccionarTurno(turnosDisponibles);