import { Injectable, signal } from '@angular/core';

import { User } from '@interfaces/respuesta-reqres.interface';

interface Estado {
  usuarios: User[];
  cargando: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  #estado = signal<Estado>({ usuarios: [], cargando: true });

  constructor() {
    console.log('Cargando datos');

  }

}