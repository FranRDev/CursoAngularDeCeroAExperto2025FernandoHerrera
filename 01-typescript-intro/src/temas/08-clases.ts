export class Persona {

    public nombre: string;
    private direccion: string;

    constructor() {
        this.nombre = 'Fran';
        this.direccion = 'Sevilla';
    }

}

const ironman = new Persona();
console.log(ironman);