import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ImagenProductoPipe } from '@productos/pipes/imagen-producto.pipe';
import { Product } from '@productos/interfaces/productos.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [ImagenProductoPipe, RouterLink, CurrencyPipe],
  selector: 'tabla-productos',
  templateUrl: './tabla-productos.component.html'
})
export class TablaProductosComponent {

    productos = input.required<Product[]>();

}