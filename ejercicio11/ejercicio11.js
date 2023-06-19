/* 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros
consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos. */


let vehiculo = prompt("¿Qué tipo de vehículo tienes? (coche, moto, autobus)");
let precioKilometro;
if (vehiculo.toLowerCase() === "coche") {
    precioKilometro = 0.20;
} else if (vehiculo.toLowerCase() === "moto") {
    precioKilometro = 0.10;
} else if (vehiculo.toLowerCase() === "autobus") {
    precioKilometro = 0.5;
} else {
    document.write("Error: vehículo no válido");
}

let distancia = prompt("¿Cuántos kilómetros has recorrido?");
let costoDistancia = precioKilometro * distancia;

let litros = prompt("¿Cuántos litros has consumido?");
let extraLitros;
if (litros >= 0 && litros <= 100) {
    extraLitros = 5;
} else {
    extraLitros = 10;
}

let total = costoDistancia + extraLitros;

document.write("El total a pagar es de " + total + " MXN");