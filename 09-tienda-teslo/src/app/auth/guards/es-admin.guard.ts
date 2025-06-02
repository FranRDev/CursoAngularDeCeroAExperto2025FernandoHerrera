import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { inject } from '@angular/core';

import { AutenticacionService } from '@auth/services/autenticacion.service';
import { firstValueFrom } from 'rxjs';

export const EsAdminGuard: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const servicioAutenticacion = inject(AutenticacionService);
  await firstValueFrom(servicioAutenticacion.comprobarEstado());
  return servicioAutenticacion.esAdmin();
}