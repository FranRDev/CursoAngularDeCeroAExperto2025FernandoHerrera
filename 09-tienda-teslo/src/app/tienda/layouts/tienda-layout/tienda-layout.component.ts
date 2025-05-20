import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionTiendaComponent } from "../../components/barra-navegacion-tienda/barra-navegacion-tienda.component";

@Component({
  imports: [RouterOutlet, BarraNavegacionTiendaComponent],
  templateUrl: './tienda-layout.component.html',
})
export default class TiendaLayoutComponent { }