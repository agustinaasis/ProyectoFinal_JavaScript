function saludar(){
        let nombreDeUsuario = prompt("Por favor, ingresa tu nombre").toUpperCase();
        let bienvenida = ("Hola " + nombreDeUsuario + " " + "¡Bienvenido!");

        while(!isNaN(nombreDeUsuario)){
            alert("El valor ingresado no es válido, ingrese su nombre correctamente")
            nombreDeUsuario = prompt("Ingresa tu nombre").toUpperCase();
        }
        while((nombreDeUsuario == "") || (nombreDeUsuario==" "))
        {
        alert ("Ingresa un nombre válido por favor")
        nombreDeUsuario = prompt("Ingresa tu nombre").toUpperCase();
        }
        if(nombreDeUsuario = nombreDeUsuario)
        alert (bienvenida);
    }
saludar();

function filtrarEspacio(){
        let espacioDecorar = parseInt(prompt("¿Que espacio te gustaría decorar? Ingresa el número que indique la opción elegida: 1- Comedor/Cocina 2- Habitación 3- Living 4- Baño 5- ¡Quiero ver ideas! "));

        switch(espacioDecorar){
            case  1:
                alert("¡Genial! En nuestra tienda encontrarás objetos únicos para decorar tu comedor.")
                break;
            case  2:
                alert("¡Gran idea! Tener la habitación de tus sueños es posible  ¡Dirígete a nuestra tienda!")
                break;
            case  3:
                alert("Personalizá tu living con objetos únicos que se adapten a tu estilo ¡Encontralos en nuestra tienda!")
                break;
            case  4:
                alert("¡Nada mejor que un cuarto de baño con estilo! Es una excelente opción agregarle distintos elementos que le aporten diseño y practicidad.")
                break;
            case 5:
                alert("¡Nada mejor que inspirarse en otros espacios que aportan ideas para nuestro lugar! Te invitamos a ver nuestro sitio y esperamos encuentres lo que estás buscando.")
                break;
            default: alert("¡No elegiste una opción correcta!")
            break;
    }
    }
    
filtrarEspacio();

let turnosDisponibles = 5;
    function seleccionarTurno(turnosDisponibles){
        for(let i = 1; i<= turnosDisponibles; i++)
        {
            console.log("Los turnos disponibles para hoy son: " + i)
        }
    }
    seleccionarTurno(turnosDisponibles);