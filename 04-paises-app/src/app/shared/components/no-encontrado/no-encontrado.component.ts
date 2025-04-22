import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'no-encontrado',
  imports: [],
  templateUrl: './no-encontrado.component.html',
})
export class NoEncontradoComponent {

  localizacion = inject(Location);

  volver() {
    this.localizacion.back();
  }
}
