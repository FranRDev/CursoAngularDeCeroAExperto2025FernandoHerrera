import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { UtilidadesFormularios } from '../../../utils/utilidades-formularios';

@Component({
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './pagina-basicos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaBasicosComponent {

  // formulario = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0)
  // });

  private fb = inject(FormBuilder);
  utilidadesFormularios = UtilidadesFormularios;

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(10)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  });

  // esValido(campo: string): boolean | null {
  //   return !!this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  // }

  // obtenerErrorCampo(campo: string): string | null {
  //   if (!this.formulario.controls[campo]) return null;

  //   const errores = this.formulario.controls[campo].errors ?? {};

  //   for (const key of Object.keys(errores)) {
  //     switch (key) {
  //       case 'required':
  //         return 'Campo requerido';

  //       case 'minlength':
  //         return `Mínimo ${errores['minlength'].requiredLength} caracteres`;

  //       case 'min':
  //         return `Mínimo ${errores['min'].min}`;
  //     }
  //   }

  //   return null;
  // }

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.formulario.reset({
      precio: 0,
      existencias: 0
    });
  }

}