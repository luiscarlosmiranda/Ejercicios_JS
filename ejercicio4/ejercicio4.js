/*Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
"Ganaste un premio", en caso contrario mostrar el número y el mensaje
“Lo sentimos, sigue participando”.*/

let numeroCliente = prompt("Por favor ingresa tu número de cliente");
if (numeroCliente === "1000") {
    document.write("Ganaste un premio");
} else {
    document.write("Lo sentimos " + numeroCliente + ", No es un mumero ganador,  sigue participando.");
}

/* Este código utiliza la función prompt para solicitar al usuario que ingrese su número de cliente. Luego, utiliza una estructura condicional if y else para verificar si el número de cliente es igual a 1000 y mostrar un document.write el mensaje correspondiente, utilizando la función document.write. */