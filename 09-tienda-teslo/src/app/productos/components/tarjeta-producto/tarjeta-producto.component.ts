import { SlicePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@productos/interfaces/productos.interface';

@Component({
  selector: 'tarjeta-producto',
  imports: [RouterLink, SlicePipe],
  templateUrl: './tarjeta-producto.component.html',
})
export class TarjetaProductoComponent {

  producto = input.required<Product>();
  // titulo = input.required<string>();
  // descripcion = input.required<string>();
  // nombreImagen = input.required<string>();
  urlImagen = computed<string>(() => `http://localhost:3000/api/files/product/${this.producto().images[0]}`);

}