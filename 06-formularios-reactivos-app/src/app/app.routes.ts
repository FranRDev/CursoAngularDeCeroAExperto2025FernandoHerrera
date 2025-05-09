import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactivos',
    loadChildren: () => import('./reactivo/reactivo.routes').then(m => m.rutasReactivo)
  },
  {
    path: 'autenticacion',
    loadChildren: () => import('./auth/auth.routes')
  },
  {
    path: 'pais',
    loadChildren: () => import('./pais/pais.routes').then(m => m.rutasPais)
  },
  {
    path: '**',
    redirectTo: 'reactivos'
  }
];