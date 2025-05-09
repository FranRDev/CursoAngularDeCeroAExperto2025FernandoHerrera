import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

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

  fb = inject(FormBuilder);
  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(10)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  });

}