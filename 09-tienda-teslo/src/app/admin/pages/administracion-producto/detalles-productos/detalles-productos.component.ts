import { Component, input } from '@angular/core';
import { CarruselProductoComponent } from '@productos/components/carrusel-producto/carrusel-producto.component';

import { Product } from '@productos/interfaces/productos.interface';

@Component({
  imports: [CarruselProductoComponent],
  selector: 'detalles-productos',
  templateUrl: './detalles-productos.component.html'
})
export class DetallesProductosComponent {

  producto = input.required<Product>();
  tallas = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

}