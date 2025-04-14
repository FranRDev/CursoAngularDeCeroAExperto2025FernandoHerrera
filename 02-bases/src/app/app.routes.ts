import { Routes } from '@angular/router';

import { PaginaContadorComponent } from './pages/contador/pagina-contador.component';
import { PaginaDragonBallComponent } from './pages/dragonball/pagina-dragonball.component';
import { PaginaHeroeComponent } from './pages/heroe/pagina-heroe.component';
import { PaginaDragonBallSuperComponent } from './pages/dragonball-super/pagina-dragonball-super.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaContadorComponent
  },
  {
    path: 'heroe',
    component: PaginaHeroeComponent
  },
  {
    path: 'dragonball',
    component: PaginaDragonBallComponent
  },
  {
    path: 'dragonball-super',
    component: PaginaDragonBallSuperComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];