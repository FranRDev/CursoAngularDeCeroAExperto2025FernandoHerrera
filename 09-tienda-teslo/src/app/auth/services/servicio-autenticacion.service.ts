import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@auth/interfaces/usuario.interface';

type EstadoAutenticacion = 'comprobando' | 'autenticado' | 'no-autenticado';

@Injectable({ providedIn: 'root' })
export class ServicioAutenticacionService {

  private _estadoAutenticacion = signal<EstadoAutenticacion>('comprobando');
  private _usuario = signal<User | null>(null);
  private _token = signal<string | null>(null);

  private clienteHttp = inject(HttpClient);

  estadoAutenticacion = computed<EstadoAutenticacion>(() => {
    if (this._estadoAutenticacion() === 'comprobando') return 'comprobando';
    if (this._usuario()) return 'autenticado';
    return 'no-autenticado';
  });

  usuario = computed(() => this._usuario());
  token = computed(() => this._token());

}