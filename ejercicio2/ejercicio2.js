/*2.Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
núm*/

let numero = prompt("Por favor ingresa un número");
if (numero % 2 === 0) {
    document.write(numero + " es divisible entre 2");
} else {
    document.write(numero + " no es divisible entre 2");
}