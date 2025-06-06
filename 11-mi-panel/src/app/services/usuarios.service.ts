import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { User, UsersResponse } from '@interfaces/respuesta-reqres.interface';
import { delay } from 'rxjs';

interface Estado {
  usuarios: User[];
  cargando: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  private clienteHttp = inject(HttpClient);

  #estado = signal<Estado>({ usuarios: [], cargando: true });

  public usuarios = computed(() => this.#estado().usuarios);
  public cargando = computed(() => this.#estado().cargando);

  constructor() {
    this.clienteHttp
      .get<UsersResponse>('https://reqres.in/api/users', { headers: { 'x-api-key': 'reqres-free-v1' } })
      .pipe(delay(1000))
      .subscribe(respuesta => {
        this.#estado.set({
          usuarios: respuesta.data,
          cargando: false
        });
      });
  }

}