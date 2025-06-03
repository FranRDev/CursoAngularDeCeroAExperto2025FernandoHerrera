import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';

import { CarruselProductoComponent } from '@productos/components/carrusel-producto/carrusel-producto.component';
import { ErrorFormularioComponent } from '@shared/components/error-formulario/error-formulario.component';
import { FormUtils } from '@utils/utilidades-formularios';
import { Gender, Product, Size } from '@productos/interfaces/productos.interface';
import { ProductosService } from '@productos/services/productos.service';

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
  enrutador = inject(Router);
  fb = inject(FormBuilder);
  servicioProductos = inject(ProductosService);
  guardado = signal(false);
  listaImagenes: FileList | undefined = undefined;
  imagenesTemporales = signal<string[]>([]);
  imagenesCarrusel = computed(() => [...this.producto().images, ...this.imagenesTemporales()]);

  formulario = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    slug: ['', [Validators.required, Validators.pattern(FormUtils.slugPattern)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
    tallas: [['']],
    imagenes: [['']],
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
      imagenes: producto.images,
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

  async enviar() {
    this.formulario.markAllAsTouched();

    const valido = this.formulario.valid;
    if (!valido) return;

    const valorFormulario = this.formulario.value;

    const producto: Partial<Product> = {
      title: valorFormulario.titulo!,
      description: valorFormulario.descripcion!,
      slug: valorFormulario.slug!,
      price: valorFormulario.precio!,
      stock: valorFormulario.existencias!,
      sizes: valorFormulario.tallas?.map(talla => talla as Size) ?? [],
      images: valorFormulario.imagenes ?? [],
      tags: valorFormulario.etiquetas?.toLocaleLowerCase().split(',').map((etiqueta) => etiqueta.trim()) ?? [],
      gender: valorFormulario.genero! as Gender
    };

    if (this.producto().id === 'nuevo') {
      const productoCreado = await firstValueFrom(this.servicioProductos.crearProducto(producto, this.listaImagenes));
      this.enrutador.navigate(['/admin/productos', productoCreado.id]);

    } else {
      await firstValueFrom(this.servicioProductos.actualizarProducto(this.producto().id, producto, this.listaImagenes));
    }

    this.guardado.set(true);

    setTimeout(() => {
      this.guardado.set(false);
    }, 3000);
  }

  cambioImagenesSeleccionadas(evento: Event) {
    const imagenes = (evento.target as HTMLInputElement).files;
    this.listaImagenes = imagenes ?? undefined;
    const urlsImagenes = Array.from(imagenes ?? []).map(fichero => URL.createObjectURL(fichero));
    this.imagenesTemporales.set(urlsImagenes);
  }

}