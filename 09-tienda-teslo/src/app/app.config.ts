import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { autenticacionInterceptor } from '@auth/interceptors/autenticacion.interceptor';
// import { registroInterceptor } from '@shared/interceptors/registro.interceptor';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        // registroInterceptor,
        autenticacionInterceptor
      ])
    )
  ]
};