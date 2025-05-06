import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TarjetaComponent } from "../../components/tarjeta/tarjeta.component";

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
  imports: [
    AsyncPipe,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TarjetaComponent,
    TitleCasePipe,
    UpperCasePipe
  ],
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

  // i18n Plural
  clientes = signal([
    'María',
    'Pedro',
    'Juan',
    'Ana',
    'Luis',
    'Laura',
    'Javier',
    'Cristina'
  ])

  mapaClientes = signal({
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente esperando',
    '=2': 'hay dos clientes esperando',
    'other': 'hay # clientes esperando'
  });

  borrarCliente() {
    this.clientes.update(clientes => clientes.slice(1));
  }

  // KeyValue Pipe
  perfil = {
    nombre: 'Fran',
    edad: 29,
    direccion: 'Alcalá de Guadaíra, España',
  }

  // Async Pipe
  valorPromesa: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error en la promesa');
      // resolve('Hola desde una promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

}