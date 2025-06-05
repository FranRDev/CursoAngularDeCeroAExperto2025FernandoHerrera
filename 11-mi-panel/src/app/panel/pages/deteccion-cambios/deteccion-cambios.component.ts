import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TituloComponent, JsonPipe],
  selector: 'app-deteccion-cambios',
  template: `
    <titulo [titulo]="frameworkActual()" />
    <pre>{{ senhalFramework() | json }}</pre>
    <pre>{{ propiedadFramework | json }}</pre>
  `,
})
export default class DeteccionCambiosComponent {

  public frameworkActual = computed(() => `Detección de Cambios - ${this.senhalFramework().nombre}`);

  public senhalFramework = signal({
    nombre: 'Angular',
    lanzamiento: 2016
  });

  public propiedadFramework = {
    nombre: 'Angular',
    lanzamiento: 2016
  };

  constructor() {
    setTimeout(() => {
      // this.propiedadFramework.nombre = 'React';
      this.senhalFramework.update(valor => ({ ...valor, nombre: 'React' }));

      console.log('Hecho');
    }, 3000);
  }

}