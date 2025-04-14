import { Component, signal } from '@angular/core';

import { AnhadirPersonajeComponent } from "../../components/shared/dragonball/anhadir-personaje/anhadir-personaje.component";
import { ListaPersonajesComponent } from "../../components/shared/dragonball/lista-personajes/lista-personajes.component";
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  templateUrl: './pagina-dragonball-super.component.html',
  imports: [ListaPersonajesComponent, AnhadirPersonajeComponent]
})
export class PaginaDragonBallSuperComponent {

  personajes = signal<Personaje[]>([
    { id: 1, nombre: 'Goku', poder: 9001 },
    { id: 2, nombre: 'Vegeta', poder: 8000 }
  ]);

}