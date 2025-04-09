interface ReproductorAudio {
    volumenAudio: number;
    duracionCancion: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anho: number;
}

const reproductorAudio: ReproductorAudio = {
    volumenAudio: 90,
    duracionCancion: 36,
    cancion: "Mess",
    detalles: {
        autor: 'Ed Sheeran',
        anho: 2015
    }
}

const cancion = 'Nueva canción';
const { cancion: otraCancion, duracionCancion: duracion, detalles } = reproductorAudio
const { autor } = detalles;

// console.log('Canción: ', otraCancion);
// console.log('Duración: ', duracion);
// console.log('Autor: ', autor);

const [, , trunks = 'No encontrado']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ', trunks);

export { };