export class Persona {

    // public nombre: string;
    // private direccion: string;

    constructor(
        public nombre: string,
        public apellidos: string,
        private direccion: string = 'Sin dirección'
    ) { }

}

// export class Heroe extends Persona {

//     constructor(
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string
//     ) {
//         super(nombreReal, 'Nueva York');
//     }
// }

export class Heroe {

    // public persona: Persona;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
        public persona: Persona
    ) {
        // this.persona = new Persona(nombreReal);
    }
}

const tony = new Persona('Tony Stark', 'Nueva York');
const ironman = new Heroe('Ironman', 45, 'Tony', tony);
console.log(ironman);