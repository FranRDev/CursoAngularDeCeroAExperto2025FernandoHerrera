import { Component, signal } from '@angular/core';
// import { NgClass } from '@angular/common';

interface Personaje {
  id: number;
  nombre: string;
  poder: number;
}

@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './pagina-dragonball.component.html',
})
export class PaginaDragonBallComponent {

  nombre = signal('Gohan');
  poder = signal(100);

  personajes = signal<Personaje[]>([
    { id: 1, nombre: 'Goku', poder: 9001 },
    { id: 2, nombre: 'Vegeta', poder: 8000 },
    { id: 4, nombre: 'Yamcha', poder: 500 },
    { id: 3, nombre: 'Piccolo', poder: 3000 }
  ]);

  // clasesPoder = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // })

  anhadirPersonaje() {
    console.log(this.nombre(), this.poder());
  }

}