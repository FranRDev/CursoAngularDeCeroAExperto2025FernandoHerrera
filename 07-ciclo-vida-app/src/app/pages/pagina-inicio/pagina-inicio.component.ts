import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';
import { TituloComponent } from "../../components/titulo/titulo.component";

const log = (...mensajes: string[]) => {
  console.log(`${mensajes[0]} %c${mensajes.slice(1).join(', ')}`, 'color: #bada55');
}

@Component({
  imports: [TituloComponent],
  templateUrl: './pagina-inicio.component.html'
})
export default class PaginaInicioComponent {

  propiedadTradicional = 'Fran';
  propiedadSenhal = signal('Fran');

  constructor() {
    log('Constructor');

    // setTimeout(() => {
    //   this.propiedadSenhal.set('Pepe Pérez');
    // this.propiedadTradicional = 'Pepe Pérez';
    //   log('Hecho');
    // }, 2000);
  }

  cambiarTradicional() {
    this.propiedadTradicional = 'Fran Rodríguez';
  }

  cambiarSenhal() {
    this.propiedadSenhal.set('Fran Rodríguez');
  }

  efectoBasico = effect((limpieza) => {
    log('efecto', 'Dispara efectos secundarios');

    limpieza(() => {
      log('limpieza', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.");
  }

  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log('ngDoCheck', "Runs every time this component is checked for changes.");
  }

  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.");
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked', "Runs every time this component content has been checked for changes.");
  }

  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.");
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.");
  }

  ngOnDestroy() {
    log('ngOnDestroy', 'Runs once before the component is destroyed.');
  }

  efectoAfterNextRender = afterNextRender(() => {
    log('afterNextRender', 'Runs once the next time that all components have been rendered to the DOM.');
  });

  efectoAfterRender = afterRender(() => {
    log('afterRender', 'Runs every time all components have been rendered to the DOM.');
  });

}