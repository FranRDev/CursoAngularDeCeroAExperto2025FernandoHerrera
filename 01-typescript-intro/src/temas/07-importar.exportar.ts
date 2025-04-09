import { Producto, calcularImpuestos } from './06-desestructuracion-funciones'

const carritoCompra: Producto[] = [
    { descripcion: 'Nokia', precio: 100 },
    { descripcion: 'iPad', precio: 150 }
];

const [total, totalImpuestos] = calcularImpuestos({ impuestos: 0.15, productos: carritoCompra });

console.log('Total', total);
console.log('Impuestos', totalImpuestos);