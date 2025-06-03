import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CarruselProductoComponent } from '@productos/components/carrusel-producto/carrusel-producto.component';
import { ErrorFormularioComponent } from '@shared/components/error-formulario/error-formulario.component';
import { FormUtils } from '@utils/utilidades-formularios';
import { Product } from '@productos/interfaces/productos.interface';

@Component({
  imports: [
    CarruselProductoComponent,
    ErrorFormularioComponent,
    ReactiveFormsModule
  ],
  selector: 'detalles-productos',
  templateUrl: './detalles-productos.component.html'
})
export class DetallesProductosComponent implements OnInit {

  producto = input.required<Product>();

  fb = inject(FormBuilder);

  formulario = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    slug: ['', [Validators.required, Validators.pattern(FormUtils.slugPattern)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
    tallas: [['']],
    imagenes: [[]],
    etiquetas: [''],
    genero: ['men', [Validators.required, Validators.pattern(/men|women|kid|unisex/)]]
  });

  tallas = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  ngOnInit(): void {
    this.establecerValorFormulario(this.producto())
  }

  establecerValorFormulario(producto: Partial<Product>) {
    this.formulario.reset({
      titulo: producto.title,
      descripcion: producto.description,
      slug: producto.slug,
      precio: producto.price,
      existencias: producto.stock,
      tallas: producto.sizes,
      etiquetas: producto.tags?.join(','),
      genero: producto.gender
    });
  }

  tallaSeleccionada(talla: string) {
    const tallasActuales = this.formulario.value.tallas ?? [];

    if (tallasActuales.includes(talla)) {
      tallasActuales.splice(tallasActuales.indexOf(talla, 1));

    } else {
      tallasActuales.push(talla);
    }

    this.formulario.patchValue({ tallas: tallasActuales });
  }

  enviar() {
    const valido = this.formulario.valid;
    console.log(this.formulario.value, { valido });
  }

}