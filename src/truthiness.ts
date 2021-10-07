export default class truthiness{
    edad: number;
    genero: string;

    constructor(edad: number, genero: string) {
        this.edad = edad;
        this.genero = genero;
    }
    check(){
        if(!this.edad){
            return console.log("Inserte edad.");
        }
        if(!this.genero){
            console.log("Inserte genero.");
        }
        if(this.edad >= 18){
            return console.log("Yo tengo " + this.edad + " años y soy mayor de edad");
        }
        if(this.edad < 18) {
            return console.log("Yo tengo " + this.edad + " años y soy menor de edad");
        }
        if(this.edad >= 57 && this.genero === "femenino") {
            return console.log("Yo tengo " + this.edad + " años" + " y estoy pensionada");
        }
        if(this.edad >= 62 && this.genero === "masculino") {
            return console.log("Yo tengo " + this.edad + " años" + "y estoy pensionado");
        }
    }
}