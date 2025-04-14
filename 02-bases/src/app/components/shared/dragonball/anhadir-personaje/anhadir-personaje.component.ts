import { Component, output, signal } from '@angular/core';

import { Personaje } from '../../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-anhadir-personaje',
  templateUrl: './anhadir-personaje.component.html'
})
export class AnhadirPersonajeComponent {

  nombre = signal('');
  poder = signal(0);

  nuevoPersonaje = output<Personaje>();

  anhadirPersonaje() {
    if (!this.nombre() || !this.poder() || this.poder() <= 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.nombre(),
      poder: this.poder()
    }

    //this.personajes.update((lista) => [...lista, nuevoPersonaje]);
    this.nuevoPersonaje.emit(nuevoPersonaje);
    this.restablecerCampos();
  }

  restablecerCampos() {
    this.nombre.set('');
    this.poder.set(0);
  }

}