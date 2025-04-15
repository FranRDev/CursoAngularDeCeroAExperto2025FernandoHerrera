import { Component } from '@angular/core';

import { MenuLateralCabeceraComponent } from "../menu-lateral-cabecera/menu-lateral-cabecera.component";
import { MenuLateralOpcionesComponent } from "../menu-lateral-opciones/menu-lateral-opciones.component";

@Component({
  selector: 'gifs-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  imports: [MenuLateralCabeceraComponent, MenuLateralOpcionesComponent]
})
export class MenuLateralComponent { }