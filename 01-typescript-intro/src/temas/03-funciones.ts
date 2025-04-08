function anhadirNumeros(a: number, b: number): number {
    return a + b;
}

const anhadirNumerosFlecha = (a: number, b: number): string => {
    return `${a + b}`;
};

function multiplicar(primerNumero: number, segundoNumero?: number, base: number = 2) {
    return primerNumero * base;
}

const resultado1 = anhadirNumeros(1, 2);
const resultado2 = anhadirNumerosFlecha(1, 2);
const resultado3 = multiplicar(5);

console.log({ resultado1, resultado2, resultado3 });

export { };