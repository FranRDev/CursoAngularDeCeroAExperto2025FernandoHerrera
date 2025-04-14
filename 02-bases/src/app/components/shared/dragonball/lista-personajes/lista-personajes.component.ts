import { Component, input } from '@angular/core';

import type { Personaje } from '../../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-lista-personajes',
  templateUrl: './lista-personajes.component.html'
})
export class ListaPersonajesComponent {

  nombreLista = input.required<string>();
  personajes = input.required<Personaje[]>();

}