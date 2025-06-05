import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cargadores-pesados-rapido',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hola mundo</h1>
  `
})
export class CargadoresPesadosRapidoComponent { }