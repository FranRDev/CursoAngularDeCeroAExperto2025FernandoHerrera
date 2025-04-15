import { Component } from '@angular/core';

import { environment } from '@envs/environment';

@Component({
  selector: 'gifs-menu-lateral-cabecera',
  templateUrl: './menu-lateral-cabecera.component.html'
})
export class MenuLateralCabeceraComponent {

  envs = environment;

}