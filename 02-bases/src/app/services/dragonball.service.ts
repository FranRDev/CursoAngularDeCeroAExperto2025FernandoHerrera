import { effect, Injectable, signal } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interface';

const cargarDeLocalStorage = (): Personaje[] => {
  const personajes = localStorage.getItem('personajes');
  return personajes ? JSON.parse(personajes) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {

  personajes = signal<Personaje[]>(cargarDeLocalStorage());

  guardarEnLocalStorage = effect(() => {
    localStorage.setItem('personajes', JSON.stringify(this.personajes()));
    console.log(`Cantidad personajes: ${this.personajes().length}`);
  });

  anhadirPersonaje(personaje: Personaje) {
    this.personajes.update((lista) => [...lista, personaje]);
  }

}