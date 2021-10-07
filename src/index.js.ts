import contEdad from "./contEdad";
import truthiness from "./truthiness";
import Password from "./Password";
import Null from "./Null";

const n: Null = new Null(null);
const w: Password = new Password (null);
w.confirmPassword();

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