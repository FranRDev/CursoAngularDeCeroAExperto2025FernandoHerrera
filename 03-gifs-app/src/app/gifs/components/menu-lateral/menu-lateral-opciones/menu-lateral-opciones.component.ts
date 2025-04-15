import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { GifsService } from 'src/app/gifs/services/gifs.service';

interface OpcionMenu {
  icono: string;
  ruta: string;
  subtitulo: string;
  titulo: string;
}

@Component({
  selector: 'gifs-menu-lateral-opciones',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral-opciones.component.html'
})
export class MenuLateralOpcionesComponent {

  servicioGifs = inject(GifsService);

  opcionesMenu: OpcionMenu[] = [
    {
      icono: 'fa-solid fa-chart-line',
      titulo: 'Tendencias',
      subtitulo: 'Gifs populares',
      ruta: '/panel/tendencias'
    },
    {
      icono: 'fa-solid fa-magnifying-glass',
      titulo: 'Buscador',
      subtitulo: 'Buscar gifs',
      ruta: '/panel/busqueda'
    }
  ]

}