import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    nombre: [''],
    precio: [0],
    existencias: [0]
  });

}