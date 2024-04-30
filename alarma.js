



// 3 ALARMA

/**
 * Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
 */


let segundos = prompt("¿Cuántos segundos necesitas para que suene la alarma?, colocalo en milisegundos");

function saludo() {
    console.log("Hola, ya pasó el tiempo");
    alert("Hola, Ya pasó el tiempo");
}

setTimeout(saludo, segundos);

