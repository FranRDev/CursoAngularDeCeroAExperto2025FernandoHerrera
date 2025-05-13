import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pagina-inicio/pagina-inicio.component')
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/pagina-acerca-de/pagina-acerca-de.component')
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/pagina-contacto/pagina-contacto.component')
  },
  {
    path: '**',
    redirectTo: ''
  },
];