import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { UtilidadesFormularios } from '../../../utils/utilidades-formularios';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './pagina-interruptores.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInterruptoresComponent {

  private fb = inject(FormBuilder);

  formulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true],
    terminosYCondiciones: [false, Validators.requiredTrue],
  });

  utilidadesFormularios = UtilidadesFormularios;

  enviar() {
    this.formulario.markAllAsTouched();
  }

}