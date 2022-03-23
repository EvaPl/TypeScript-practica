define(["require", "exports", "./direccion", "./mail", "./persona", "./telefono"], function (require, exports, direccion_1, mail_1, persona_1, telefono_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let personas = [];
    personas.push(new persona_1.Persona("Andrea", "Toral Sánchez", 22, "25478963L", "08/12/1999", "Marrón", "Femenino", new direccion_1.Direccion("C/San Jaime", 35, 2, "A", 17840, "Baleares", "Baleares"), new mail_1.Mail("Personal", "andreats@gmail.com"), new telefono_1.telefono("Personal", 611122333), "-"));
    personas.push(new persona_1.Persona("Carlos", "Hernandez Gómez", 46, "32659874Y", "16/01/1975", "Rojo", "Masculino", new direccion_1.Direccion("Plaza Ismael", 50, 3, "C", 12600, "Castellón", "Castellón"), new mail_1.Mail("Trabajo", "carloshg@gmail.com"), new telefono_1.telefono("Personal", 633344555), "Contactar en horario laboral."));
    personas.push(new persona_1.Persona("Maria", "Giménez Ferrer", 33, "58559306T", "24/09/1988", "Lila", "Femenino", new direccion_1.Direccion("Ronda Dario", 8, 8, "D", 29012, "Málaga", "Málaga"), new mail_1.Mail("Trabajo", "mariagf@gmail.com"), new telefono_1.telefono("Trabajo", 633344555), "Contactar de 8:00h a 16:00h."));
    let personaFiltrada = personas.filter(a => a.dni == "32659874Y")[0];
    let nuevaDireccion = new direccion_1.Direccion("Av.José Laguillo", 6, 4, "A", 41003, "Sevilla", "Sevilla");
    personaFiltrada.direcciones.pop();
    personaFiltrada.direcciones.push(nuevaDireccion);
    let nuevoMail = new mail_1.Mail("Trabajo", "cardona@gmail.com");
    personaFiltrada.mails.pop();
    personaFiltrada.mails.push(nuevoMail);
    let nuevoTelefono = new telefono_1.telefono("Personal", 654425989);
    personaFiltrada.telefonos.pop();
    personaFiltrada.telefonos.push(nuevoTelefono);
    for (let i = 9; i < personas.length; i++) {
        console.log(personas[i]);
    }
});
//# sourceMappingURL=main.js.map