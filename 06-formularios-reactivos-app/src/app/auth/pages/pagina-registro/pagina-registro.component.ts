import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { UtilidadesFormularios } from '../../../utils/utilidades-formularios';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './pagina-registro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaRegistroComponent {

  private fb = inject(FormBuilder);

  formulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    usuario: ['', [Validators.required, Validators.minLength(6)]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
    repetirClave: ['', Validators.required],
  });

  utilidadesFormularios = UtilidadesFormularios;

  enviar() {
    this.formulario.markAllAsTouched();
  }

}