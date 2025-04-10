export function cualEsMiTipo<T>(argumento: T): T {
    return argumento;
}

let soyUnaCadena = cualEsMiTipo<string>('Hola mundo');
let soyUnNumero = cualEsMiTipo<number>(100);
let soyUnArray = cualEsMiTipo<number[]>([1, 2, 3, 4, 5]);

console.log(soyUnaCadena.split(' '));
console.log(soyUnNumero.toFixed());
console.log(soyUnArray.join('-'));