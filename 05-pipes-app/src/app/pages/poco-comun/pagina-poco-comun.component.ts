import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { TarjetaComponent } from "../../components/tarjeta/tarjeta.component";
import { I18nSelectPipe } from '@angular/common';

const cliente1 = {
  nombre: 'Fran',
  genero: 'masculino',
  edad: 29,
  direccion: 'Alcalá de Guadaíra, España'
}

const cliente2 = {
  nombre: 'Raquel',
  genero: 'femenino',
  edad: 25,
  direccion: 'Carmona, España'
}

@Component({
  selector: 'pagina-poco-comun',
  imports: [TarjetaComponent, I18nSelectPipe],
  templateUrl: './pagina-poco-comun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaPocoComunComponent {

  // i18n Select
  cliente = signal(cliente1);

  mapaInvitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  cambiarCliente() {
    if (this.cliente() === cliente1) {
      this.cliente.set(cliente2);
      return;
    }

    this.cliente.set(cliente1);
  }

}