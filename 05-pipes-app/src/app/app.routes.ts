import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basica',
    title: 'Pipes básicos',
    loadComponent: () => import('./pages/basica/pagina-basica.component')
  },
  {
    path: 'numeros',
    title: 'Pipes numéricos',
    loadComponent: () => import('./pages/numeros/pagina-numeros.component')
  },
  {
    path: 'poco-comun',
    title: 'Pipes poco comunes',
    loadComponent: () => import('./pages/poco-comun/pagina-poco-comun.component')
  },
  {
    path: 'personalizados',
    title: 'Pipes personalizados',
    loadComponent: () => import('./pages/personalizada/pagina-personalizada.component')
  },
  {
    path: '**',
    redirectTo: 'basica'
  }
];