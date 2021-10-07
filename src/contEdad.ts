export default class contEdad{
    edad: number | string;

    constructor(edad: number | string) {
    this.edad = edad;
    }
    contar(){
        if (typeof this.edad === "number"){
            return console.log("Yo tengo "+ this.edad + " años de edad .");
        }
        return console.log("Error. Por favor digite su edad en números.");

    }
}
