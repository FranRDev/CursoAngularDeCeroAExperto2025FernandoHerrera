import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  selector: 'transicion-vista',
  imports: [TituloComponent],
  template: `
    <titulo titulo="Transición de Vista 1" />

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: heroe1">

      <div class="bg-blue-400 w-56 h-56" style="view-transition-name: heroe2"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransicionVista1Component { }