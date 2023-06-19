/*Crear un programa que determine si un número introducido en un Prompt
es par o no, la respuesta será mostrada en un Alert.*/

let numero = prompt("Por favor ingresa un número");
if (numero % 2 === 0) {
    alert("El número " + numero + " es par");
} else {
    alert("El número " + numero + " es impar");
}

/*Este código utiliza la función prompt para solicitar al usuario que ingrese un número. Luego, utiliza una estructura condicional if y else para verificar si el número es par (es decir, si el residuo de la división entre el número y 2 es igual a 0) y mostrar una alerta con el mensaje correspondiente utilizando la función alert.*/