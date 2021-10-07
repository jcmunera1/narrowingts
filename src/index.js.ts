import contEdad from "./contEdad";
import truthiness from "./truthiness";

const e: contEdad = new contEdad(24);
e.contar();

const t: truthiness = new truthiness(56, "femenino");
t.check();

function init(obj: Person) {
    if(obj instanceof Chef) {
        obj.cook();
    }

    if(obj instanceof Driver) {
        obj.drive();
    }
}