/* Requerir al usuario que ingrese un día de la semana e imprimir un
mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
diferente si es sábado o domingo. Si el día ingresado no es ninguno de
esos, imprimir otro mensaje. */

let dia = prompt("Por favor ingresa un día de la semana");
if (dia.toLowerCase() === "lunes") {
    document.write("Hoy es lunes, comienza una nueva semana");
} else if (dia.toLowerCase() === "viernes") {
    document.write("Hoy es viernes, ¡casi fin de semana!");
} else if (dia.toLowerCase() === "sábado" || dia.toLowerCase() === "sabado" || dia.toLowerCase() === "domingo") {
    document.write("Hoy es fin de semana, ¡a descansar!");
} else {
    document.write("Hoy es " + dia + ", un día más de la semana");
}