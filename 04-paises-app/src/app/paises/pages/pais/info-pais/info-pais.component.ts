import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import type { Pais } from '../../../interfaces/paises.interfaces';

@Component({
  selector: 'info-pais',
  imports: [DecimalPipe],
  templateUrl: './info-pais.component.html',
})
export class InfoPaisComponent {

  pais = input.required<Pais>();

}