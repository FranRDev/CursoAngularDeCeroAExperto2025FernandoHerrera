import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class UtilidadesFormularios {

  static patronCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static patronNombre = '^([a-zA-Z]+) ([a-zA-Z]+)$';
  static patronNoSoloEspacios = '^[a-zA-Z0-9]+$';

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

        case 'min':
          return `Mínimo ${errores['min'].min}`;

        case 'minlength':
          return `Mínimo ${errores['minlength'].requiredLength} caracteres`;

        case 'pattern':
          switch (errores['pattern'].requiredPattern) {
            case UtilidadesFormularios.patronCorreo:
              return 'Correo inválido';

            case UtilidadesFormularios.patronNombre:
              return 'Nombre inválido';

            case UtilidadesFormularios.patronNoSoloEspacios:
              return 'No se permiten solo espacios';

            default:
              return 'Campo inválido';
          }

        case 'required':
          return 'Campo requerido';

        default:
          return 'Campo inválido';
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