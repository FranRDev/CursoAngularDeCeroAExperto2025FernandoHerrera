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

  utilidadesFormularios = UtilidadesFormularios;

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.utilidadesFormularios.patronNombre)]],
    correo: ['', [Validators.required, Validators.pattern(this.utilidadesFormularios.patronCorreo)], this.utilidadesFormularios.comprobandoRespuestaServidor],
    usuario: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.utilidadesFormularios.patronNoSoloEspacios)]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
    repetirClave: ['', Validators.required],
  }, {
    validators: this.utilidadesFormularios.validarClavesIguales('clave', 'repetirClave')
  });

  enviar() {
    this.formulario.markAllAsTouched();
  }

}