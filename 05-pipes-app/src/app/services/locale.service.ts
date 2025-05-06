import { Injectable, signal } from '@angular/core';

export type LocaleDisponibles = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {

  private localeActual = signal<LocaleDisponibles>('es');

  constructor() {
    this.localeActual.set((localStorage.getItem('locale') as LocaleDisponibles) ?? 'es')
  }

  get obtenerLocale() {
    return this.localeActual();
  }

  cambiarLocale(locale: LocaleDisponibles) {
    localStorage.setItem('locale', locale);
    this.localeActual.set(locale);
    window.location.reload();
  }

}