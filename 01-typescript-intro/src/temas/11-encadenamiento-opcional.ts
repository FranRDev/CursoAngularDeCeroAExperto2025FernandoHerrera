export interface Pasajero {

    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: 'Fran'
}

const pasajero2: Pasajero = {
    nombre: 'Raquel',
    hijos: ['Ninguno', 'Ninguno']
}

const obtenerHijos = (pasajero: Pasajero): number => {
    const cuantosHijos = pasajero.hijos?.length || 0;
    // const cuantosHijos = pasajero.hijos!.length;
    console.log(pasajero.nombre, cuantosHijos);
    return cuantosHijos;
}

obtenerHijos(pasajero1);
obtenerHijos(pasajero2);