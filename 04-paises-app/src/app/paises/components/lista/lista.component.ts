import { Component, input } from '@angular/core';

import { Pais } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'paises-lista',
  imports: [],
  templateUrl: './lista.component.html'
})
export class ListaComponent {

  paises = input.required<Pais[]>();

}