/*1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.*/

let usuario = prompt("¿Eres bellisimo/a?");
if  (usuario.toLowerCase()  === "si" || usuario.toLowerCase () === "si") {
    document.write ("Ciertamente");
}
else if (usuario.toLowerCase () === "no") {
   document.write ("No te Creo");
}
