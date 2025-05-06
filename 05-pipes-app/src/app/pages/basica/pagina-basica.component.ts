import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'pagina-basica',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pagina-basica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaBasicaComponent {

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

}