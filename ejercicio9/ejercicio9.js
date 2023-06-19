/* Escribe un programa que responda a un usuario que quiere comprar un
helado en una conocida marca de comida rápida cuánto le costará en
función del topping que elija.
● El helado sin topping cuesta 50 MXN.
● El topping de oreo cuesta 10 MXN.
● El topping de KitKat cuesta 15 MXN.
● El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa
le indicará “no tenemos este topping, lo sentimos.” y a continuación le
informará el precio del helado sin ningún topping. */

let topping = prompt("¿Qué topping te gustaría agregar a tu helado? (oreo, KitKat, brownie)");
let precio = 50;
if (topping.toLowerCase() === "oreo") {
    precio += 10;
    document.write("El helado con topping de oreo cuesta " + precio + " MXN");
} else if (topping.toLowerCase() === "kitkat") {
    precio += 15;
    document.write("El helado con topping de KitKat cuesta " + precio + " MXN");
} else if (topping.toLowerCase() === "brownie") {
    precio += 20;
    document.write("El helado con topping de brownie cuesta " + precio + " MXN");
} else {
    document.write("No tenemos este topping, lo sentimos. El helado sin topping cuesta " + precio + " MXN");
}