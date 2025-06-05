import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deteccion-cambios',
  imports: [],
  templateUrl: './deteccion-cambios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeteccionCambiosComponent { }