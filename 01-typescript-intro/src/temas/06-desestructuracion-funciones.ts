export interface Producto {
    descripcion: string;
    precio: number;
}

// const telefono: Producto = {
//     descripcion: 'Nokia A1',
//     precio: 150.0
// }

// const tablet: Producto = {
//     descripcion: 'iPad Air',
//     precio: 250.0
// }

export interface OpcionesCalculoImpuestos {
    impuestos: number;
    productos: Producto[];
}

export function calcularImpuestos(opciones: OpcionesCalculoImpuestos): [number, number] {
    const { productos, impuestos } = opciones;

    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * impuestos];
}

// const carritoCompra = [telefono, tablet];
// const impuestos = 0.15;

// const [total, totalImpuestos] = calcularImpuestos({
//     productos: carritoCompra,
//     impuestos
// });

// console.log('Total', total);
// console.log('Impuestos', totalImpuestos);