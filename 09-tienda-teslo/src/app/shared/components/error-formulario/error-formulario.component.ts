import { Component, input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormUtils } from '@utils/utilidades-formularios';

@Component({
  imports: [],
  selector: 'error-formulario',
  templateUrl: './error-formulario.component.html',
})
export class ErrorFormularioComponent {

  control = input.required<AbstractControl>();

  get error() {
    const errores: ValidationErrors = this.control().errors || {};

    return this.control().touched && Object.keys(errores).length > 0
      ? FormUtils.getTextError(errores)
      : null;
  }

}