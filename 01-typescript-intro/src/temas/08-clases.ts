export class Persona {

    // public nombre: string;
    // private direccion: string;

    constructor(
        public nombre: string,
        private direccion: string = 'Sin dirección'
    ) { }

}

export class Heroe extends Persona {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'Nueva York');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);