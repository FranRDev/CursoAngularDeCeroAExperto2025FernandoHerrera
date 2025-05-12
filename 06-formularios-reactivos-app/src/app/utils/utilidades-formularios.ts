import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class UtilidadesFormularios {

  static comprobarCampoValido(formulario: FormGroup, campo: string): boolean | null {
    return !!formulario.controls[campo].errors && formulario.controls[campo].touched;
  }

  static comprobarCampoArrayValido(array: FormArray, indice: number) {
    return !!array.controls[indice].errors && array.controls[indice].touched;
  }

  private static obtenerError(errores: ValidationErrors): string | null {
    for (const key of Object.keys(errores)) {
      switch (key) {
        case 'email':
          return 'Correo inválido';

        case 'required':
          return 'Campo requerido';

        case 'min':
          return `Mínimo ${errores['min'].min}`;

        case 'minlength':
          return `Mínimo ${errores['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  static obtenerErrorCampo(formulario: FormGroup, campo: string): string | null {
    if (!formulario.controls[campo]) return null;
    const errores = formulario.controls[campo].errors ?? {};
    return UtilidadesFormularios.obtenerError(errores);
  }

  static obtenerErrorCampoArray(array: FormArray, indice: number): string | null {
    if (!array.controls[indice]) return null;
    const errores = array.controls[indice].errors ?? {};
    return UtilidadesFormularios.obtenerError(errores);
  }

}