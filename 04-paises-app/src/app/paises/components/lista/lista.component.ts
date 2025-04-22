import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Pais } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'paises-lista',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './lista.component.html'
})
export class ListaComponent {

  paises = input.required<Pais[]>();

}