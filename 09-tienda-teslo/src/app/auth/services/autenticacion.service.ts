import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { RespuestaAuth } from '@auth/interfaces/respuesta-auth.interfce';
import { User } from '@auth/interfaces/usuario.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

type EstadoAutenticacion = 'comprobando' | 'autenticado' | 'no-autenticado';

const urlBase = environment.urlBase;

@Injectable({ providedIn: 'root' })
export class AutenticacionService {

  private _estadoAutenticacion = signal<EstadoAutenticacion>('comprobando');
  private _usuario = signal<User | null>(null);
  private _token = signal<string | null>(null);

  private clienteHttp = inject(HttpClient);

  recursoComprobarEstado = rxResource({
    loader: () => this.comprobarEstado()
  });

  estadoAutenticacion = computed<EstadoAutenticacion>(() => {
    if (this._estadoAutenticacion() === 'comprobando') return 'comprobando';
    if (this._usuario()) return 'autenticado';
    return 'no-autenticado';
  });

  usuario = computed(() => this._usuario());
  token = computed(() => this._token());

  iniciarSesion(correo: string, clave: string): Observable<boolean> {
    return this.clienteHttp
      .post<RespuestaAuth>(`${urlBase}/auth/login`, { email: correo, password: clave })
      .pipe(
        tap(respuesta => {
          this._usuario.set(respuesta.user);
          this._token.set(respuesta.token);
          localStorage.setItem('token', respuesta.token);
          this._estadoAutenticacion.set('autenticado');
        }),
        map(() => true),
        catchError(() => {
          this._usuario.set(null);
          this._token.set(null);
          this._estadoAutenticacion.set('no-autenticado');
          return of(false);
        })
      );
  }

  comprobarEstado(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);

    return this.clienteHttp
      .get<RespuestaAuth>(`${urlBase}/auth/check-status`, { headers: { Authorization: `Bearer ${token}` } })
      .pipe(
        tap(respuesta => {
          this._usuario.set(respuesta.user);
          this._token.set(respuesta.token);
          localStorage.setItem('token', respuesta.token);
          this._estadoAutenticacion.set('autenticado');
        }),
        map(() => true),
        catchError(() => {
          this._usuario.set(null);
          this._token.set(null);
          this._estadoAutenticacion.set('no-autenticado');
          return of(false);
        })
      );
  }

}