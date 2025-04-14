import { Injectable, signal } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({ providedIn: 'root' })
export class DragonBallService {

  personajes = signal<Personaje[]>([
    { id: 1, nombre: 'Goku', poder: 9001 },
    { id: 2, nombre: 'Vegeta', poder: 8000 }
  ]);

  anhadirPersonaje(personaje: Personaje) {
    this.personajes.update((lista) => [...lista, personaje]);
  }

}