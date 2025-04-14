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