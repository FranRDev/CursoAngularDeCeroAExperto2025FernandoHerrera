import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

import { Product } from '@productos/interfaces/productos.interface';
import { ImagenProductoPipe } from '@productos/pipes/imagen-producto.pipe';

@Component({
  selector: 'tarjeta-producto',
  imports: [RouterLink, SlicePipe, ImagenProductoPipe],
  templateUrl: './tarjeta-producto.component.html',
})
export class TarjetaProductoComponent {

  producto = input.required<Product>();
  urlImagen = computed<string>(() => `http://localhost:3000/api/files/product/${this.producto().images[0]}`);

}