import { Component, inject } from '@angular/core';

import { AnhadirPersonajeComponent } from "../../components/shared/dragonball/anhadir-personaje/anhadir-personaje.component";
import { ListaPersonajesComponent } from "../../components/shared/dragonball/lista-personajes/lista-personajes.component";
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  templateUrl: './pagina-dragonball-super.component.html',
  imports: [ListaPersonajesComponent, AnhadirPersonajeComponent]
})
export class PaginaDragonBallSuperComponent {

  // constructor(
  //   public servicioDragonBall: DragonBallService
  // ) { }

  public servicioDragonBall = inject(DragonBallService);

}