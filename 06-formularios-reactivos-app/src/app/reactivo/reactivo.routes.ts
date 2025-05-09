import { Routes } from "@angular/router";

import { PaginaBasicosComponent } from "./pages/pagina-basicos/pagina-basicos.component";
import { PaginaDinamicosComponent } from "./pages/pagina-dinamicos/pagina-dinamicos.component";
import { PaginaInterruptoresComponent } from "./pages/pagina-interruptores/pagina-interruptores.component";

export const rutasReactivo: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicos',
        title: 'Básicos',
        component: PaginaBasicosComponent
      },
      {
        path: 'dinamicos',
        title: 'Dinámicos',
        component: PaginaDinamicosComponent
      },
      {
        path: 'interruptores',
        title: 'Interruptores',
        component: PaginaInterruptoresComponent
      },
      {
        path: '**',
        redirectTo: 'basicos'
      }
    ]
  }
]