import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pagina-dinamicos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaDinamicosComponent {

  private fb = inject(FormBuilder);

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

  get favoritos() {
    return this.formulario.get('favoritos') as FormArray;
  }

}