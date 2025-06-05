import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cargador-usuarios',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Hola mundo</h1>
  `
})
export class CargadorUsuariosComponent { }