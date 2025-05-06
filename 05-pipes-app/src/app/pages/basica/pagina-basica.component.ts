import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { LocaleDisponibles, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'pagina-basica',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pagina-basica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaBasicaComponent {

  servicioLocale = inject(LocaleService);
  localeActual = signal(inject(LOCALE_ID));

  nombreMinusculas = signal('fran');
  nombreMayusculas = signal('FRAN');
  nombreCompleto = signal('fRaN RODríGuEz');
  fechaPersonalizada = signal(new Date());

  efectoFecha = effect((limpieza) => {
    const intervalo = setInterval(() => {
      this.fechaPersonalizada.set(new Date());
      console.log('Efecto ejecutado');
    }, 1000);

    limpieza(() => {
      clearInterval(intervalo);
      console.log('Efecto limpiado');
    });
  });

  cambiarLocale(locale: LocaleDisponibles) {
    console.log({ locale });
    this.servicioLocale.cambiarLocale(locale);
  }

}