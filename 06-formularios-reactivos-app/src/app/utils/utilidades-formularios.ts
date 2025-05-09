import { FormGroup } from "@angular/forms";

export class UtilidadesFormularios {

  static comprobarCampoValido(formulario: FormGroup, campo: string): boolean | null {
    return !!formulario.controls[campo].errors && formulario.controls[campo].touched;
  }

  static obtenerErrorCampo(formulario: FormGroup, campo: string): string | null {
    if (!formulario.controls[campo]) return null;

    const errores = formulario.controls[campo].errors ?? {};

    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'required':
          return 'Campo requerido';

        case 'minlength':
          return `Mínimo ${errores['minlength'].requiredLength} caracteres`;

        case 'min':
          return `Mínimo ${errores['min'].min}`;
      }
    }

    return null;
  }

}