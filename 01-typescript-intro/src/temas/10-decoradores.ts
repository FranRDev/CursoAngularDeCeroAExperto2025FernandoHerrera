function decoradorClase<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        nuevaPropiedad = 'Nueva propiedad';
        hola = 'Hola';
    }
}

@decoradorClase
export class SuperClase {

    public miPropiedad: string = `Abc123`;

    pintar() {
        console.log('Hola mundo');
    }

}

console.log(SuperClase);

const miClase = new SuperClase();
console.log(miClase);