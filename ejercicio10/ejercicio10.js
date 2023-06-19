/* Un conocido portal de educación en tecnología está ofreciendo
programas para aprender a desarrollar aplicaciones. Escribe un programa
que le indique a la persona interesada cuánto deberá pagar
mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su
costo mensual:
● Course: $4999 MXN
● Carrera $3999 MXN
● Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el
descuento correspondiente al precio final.
● Beca Facebook: 20% de descuento.
● Beca Google: 15% de descuento.
● Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario
cuánto gastaría en total por el curso elegido, tomando en cuenta las
siguientes duraciones:
● Course: 2 meses
● Carrera 6 meses
● Master: 12 meses */


let programa = prompt("¿Qué programa te gustaría elegir? (Course, Carrera, Master)");
let precio;
let duracion;
if (programa.toLowerCase() === "course") {
    precio = 4999;
    duracion = 2;
} else if (programa.toLowerCase() === "carrera") {
    precio = 3999;
    duracion = 6;
} else if (programa.toLowerCase() === "master") {
    precio = 2999;
    duracion = 12;
} else {
    document.write("Error: programa no válido");
}
let beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)");
if (beca.toLowerCase() === "facebook") {
    precio *= 0.8;
} else if (beca.toLowerCase() === "google") {
    precio *= 0.85;
} else if (beca.toLowerCase() === "jesua") {
    precio *= 0.5;
}
document.write("El precio mensual del programa " + programa + " con la beca " + beca + " es de " + precio + " MXN");
document.write("<br>");
document.write("El costo total del programa es de " + (precio * duracion) + " MXN");