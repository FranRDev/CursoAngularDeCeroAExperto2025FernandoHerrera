import { Component, signal } from '@angular/core';

import { ListaPersonajesComponent } from "../../components/shared/dragonball/lista-personajes/lista-personajes.component";
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  templateUrl: './pagina-dragonball-super.component.html',
  imports: [ListaPersonajesComponent]
})
export class PaginaDragonBallSuperComponent {

  nombre = signal('');
  poder = signal(0);

  personajes = signal<Personaje[]>([
    { id: 1, nombre: 'Goku', poder: 9001 },
    { id: 2, nombre: 'Vegeta', poder: 8000 }
  ]);

  anhadirPersonaje() {
    if (!this.nombre() || !this.poder() || this.poder() <= 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: this.personajes().length + 1,
      nombre: this.nombre(),
      poder: this.poder()
    }

    this.personajes.update((lista) => [...lista, nuevoPersonaje]);
    this.restablecerCampos();
  }

  restablecerCampos() {
    this.nombre.set('');
    this.poder.set(0);
  }

}