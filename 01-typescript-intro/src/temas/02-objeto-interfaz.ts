const habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    puntosDeVida: number;
    habilidades: string[];
    puebloNatal?: string;
}

const fran: Personaje = {
    nombre: 'Fran',
    puntosDeVida: 100,
    habilidades: ['Desarrollar', 'Ver buen cine']
}

fran.puebloNatal = 'Alcalá';
console.table(fran)

export { };