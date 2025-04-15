import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EstadoScrollService {

  estadoScrollTendencias = signal(0);

}