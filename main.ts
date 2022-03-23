import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { telefono } from "./telefono";

let personas: Persona[] = [];

personas.push(new Persona(
    "Andrea",
    "Toral Sánchez",
    22,
    "25478963L",
    "08/12/1999",
    "Marrón",
    "Femenino",
    new Direccion(
        "C/San Jaime",
        35,
        2,
        "A",
        17840,
        "Baleares",
        "Baleares"
    ),
    new Mail(
        "Personal",
        "andreats@gmail.com"
    ),
    new telefono(
        "Personal",
        611122333,
    ),
    "-"

));

personas.push(new Persona(
    "Carlos",
    "Hernandez Gómez",
    46,
    "32659874Y",
    "16/01/1975",
    "Rojo",
    "Masculino",
    new Direccion(
        "Plaza Ismael",
        50,
        3,
        "C",
        12600,
        "Castellón",
        "Castellón"
    ),
    new Mail(
        "Trabajo",
        "carloshg@gmail.com"
    ),
    new telefono(
        "Personal",
        633344555,
    ),
    "Contactar en horario laboral."

));

personas.push(new Persona(
    "Maria",
    "Giménez Ferrer",
    33,
    "58559306T",
    "24/09/1988",
    "Lila",
    "Femenino",
    new Direccion(
        "Ronda Dario",
        8,
        8,
        "D",
        29012,
        "Málaga",
        "Málaga"
    ),
    new Mail(
        "Trabajo",
        "mariagf@gmail.com"
    ),
    new telefono(
        "Trabajo",
        633344555,
    ),
    "Contactar de 8:00h a 16:00h."

));

let personaFiltrada: Persona = personas.filter(a => a.dni == "32659874Y")[0];

let nuevaDireccion: Direccion = new Direccion("Av.José Laguillo", 6, 4, "A", 41003, "Sevilla", "Sevilla");

personaFiltrada.direcciones.pop();
personaFiltrada.direcciones.push(nuevaDireccion);

let nuevoMail: Mail = new Mail("Trabajo", "cardona@gmail.com");

personaFiltrada.mails.pop();
personaFiltrada.mails.push(nuevoMail);

let nuevoTelefono: telefono = new telefono("Personal", 654425989);

personaFiltrada.telefonos.pop();
personaFiltrada.telefonos.push(nuevoTelefono);

for (let i = 0; i < personas.length; i++){
console.log(personas[i]);
}