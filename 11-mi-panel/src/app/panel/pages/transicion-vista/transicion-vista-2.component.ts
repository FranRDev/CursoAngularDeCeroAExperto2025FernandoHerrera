import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  selector: 'transicion-vista',
  imports: [TituloComponent],
  template: `
    <titulo titulo="Transición de Vista 2" />

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: heroe1">

      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: heroe2"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransicionVista2Component { }