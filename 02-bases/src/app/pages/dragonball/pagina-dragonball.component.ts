import { Component, signal } from '@angular/core';

interface Personaje {
  id: number;
  nombre: string;
  poder: number;
}

@Component({
  imports: [],
  templateUrl: './pagina-dragonball.component.html',
})
export class PaginaDragonBallComponent {

  personajes = signal<Personaje[]>([
    { id: 1, nombre: 'Goku', poder: 9001 },
    { id: 2, nombre: 'Vegeta', poder: 8000 },
    { id: 3, nombre: 'Piccolo', poder: 3000 }
  ]);

}