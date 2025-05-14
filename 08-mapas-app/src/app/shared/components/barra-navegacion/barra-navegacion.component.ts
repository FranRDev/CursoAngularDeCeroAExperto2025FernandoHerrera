import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'

import { filter, map, tap } from 'rxjs';

import { routes } from '../../../app.routes';

@Component({
  selector: 'barra-navegacion',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './barra-navegacion.component.html',
})
export class BarraNavegacionComponent {

  enrutador = inject(Router);

  rutas = routes.map(ruta => ({
    ruta: ruta.path,
    titulo: `${ruta.title ?? 'Mapas en Angular'}`
  })).filter(ruta => ruta.ruta !== '**');

  tituloPagina$ = this.enrutador.events.pipe(
    filter(evento => evento instanceof NavigationEnd),
    tap(evento => console.log(evento)),
    map(evento => evento.url),
    map(url => this.rutas.find(ruta => `/${ruta.ruta}` === url)?.titulo ?? 'Mapas')
  );

  tituloPagina = toSignal(this.enrutador.events.pipe(
    filter(evento => evento instanceof NavigationEnd),
    map(evento => evento.url),
    map(url => this.rutas.find(ruta => `/${ruta.ruta}` === url)?.titulo ?? 'Mapas')
  ));

}