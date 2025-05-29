import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () => import('./auth/auth.routes')
    // TODO: Guards
  },
  {
    path: '',
    loadChildren: () => import('./tienda/tienda.routes')
  }
];