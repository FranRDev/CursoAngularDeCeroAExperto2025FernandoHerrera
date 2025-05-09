import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  formulario = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(0),
    existencias: new FormControl(0)
  });

}