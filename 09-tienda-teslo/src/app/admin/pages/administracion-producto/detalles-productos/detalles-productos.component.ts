import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarruselProductoComponent } from '@productos/components/carrusel-producto/carrusel-producto.component';

import { Product } from '@productos/interfaces/productos.interface';
import { FormUtils } from '@utils/utilidades-formularios';

@Component({
  imports: [CarruselProductoComponent, ReactiveFormsModule],
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
    tallas: [[]],
    imagenes: [[]],
    etiquetas: [''],
    genero: ['hombre', [Validators.required, Validators.pattern(/hombre|mujer|ninhos|unisex/)]]
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
      //tallas: producto.sizes,
      //imagenes: producto.images,
      etiquetas: producto.tags?.join(','),
      genero: producto.gender
    });
  }

  enviar() {
    console.log(this.formulario.value);
  }

}