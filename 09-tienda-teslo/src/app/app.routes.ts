import { Routes } from '@angular/router';
import { NoAutenticadoGuard } from '@auth/guards/no-autenticado.guard';

export const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [
      // () => {
      //   console.log('Hola mundo');
      //   return true;
      // },
      NoAutenticadoGuard
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
  },
  {
    path: '',
    loadChildren: () => import('./tienda/tienda.routes')
  }
];