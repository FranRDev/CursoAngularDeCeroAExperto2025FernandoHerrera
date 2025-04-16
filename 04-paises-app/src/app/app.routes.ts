import { Routes } from '@angular/router';
import { InicioComponent } from './shared/pages/inicio/pagina-inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.routes')
  },
  {
    path: '**',
    redirectTo: ''
  }
];