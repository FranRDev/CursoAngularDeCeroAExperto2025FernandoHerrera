import { Component, signal } from '@angular/core';

import { Personaje } from '../../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-anhadir-personaje',
  templateUrl: './anhadir-personaje.component.html'
})
export class AnhadirPersonajeComponent {

  nombre = signal('');
  poder = signal(0);

  anhadirPersonaje() {
    if (!this.nombre() || !this.poder() || this.poder() <= 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: 1000, //this.personajes().length + 1,
      nombre: this.nombre(),
      poder: this.poder()
    }

    //this.personajes.update((lista) => [...lista, nuevoPersonaje]);
    console.log({nuevoPersonaje});
    this.restablecerCampos();
  }

  restablecerCampos() {
    this.nombre.set('');
    this.poder.set(0);
  }

}