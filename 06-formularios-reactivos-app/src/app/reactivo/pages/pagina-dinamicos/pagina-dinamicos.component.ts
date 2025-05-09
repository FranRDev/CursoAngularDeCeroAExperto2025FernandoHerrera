import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UtilidadesFormularios } from '../../../utils/utilidades-formularios';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pagina-dinamicos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaDinamicosComponent {

  private fb = inject(FormBuilder);

  utilidadesFormularios = UtilidadesFormularios;

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Crash Team Racing', Validators.required],
        ['Tombi!', Validators.required],
      ],
      Validators.minLength(2)
    )
  });

  nuevoFavorito = new FormControl('', Validators.required);
  // nuevoFavorito = this.fb.control([]);

  get favoritos() {
    return this.formulario.get('favoritos') as FormArray;
  }

  anhadirFavorito() {
    if (this.nuevoFavorito.invalid) return;
    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito(indice: number) {
    this.favoritos.removeAt(indice);
  }

  enviar() {
    this.formulario.markAllAsTouched();
  }

}