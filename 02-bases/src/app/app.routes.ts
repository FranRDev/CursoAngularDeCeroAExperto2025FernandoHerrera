import { Routes } from '@angular/router';

import { PaginaContadorComponent } from './pages/contador/pagina-contador.component';
import { PaginaHeroeComponent } from './pages/contador/heroe/pagina-heroe.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaContadorComponent
  },
  {
    path: 'heroe',
    component: PaginaHeroeComponent
  }
];