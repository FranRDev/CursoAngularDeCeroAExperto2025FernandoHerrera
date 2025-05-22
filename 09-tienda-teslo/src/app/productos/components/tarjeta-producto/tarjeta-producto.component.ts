import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tarjeta-producto',
  imports: [RouterLink],
  templateUrl: './tarjeta-producto.component.html',
})
export class TarjetaProductoComponent {

  titulo = input.required<string>();
  descripcion = input.required<string>();
  nombreImagen = input.required<string>();
  urlImagen = computed<string>(() => `http://localhost:3000/api/files/product/${this.nombreImagen()}`);

}