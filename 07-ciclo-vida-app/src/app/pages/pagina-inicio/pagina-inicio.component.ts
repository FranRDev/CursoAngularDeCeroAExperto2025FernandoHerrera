import { Component } from '@angular/core';

const log = (...mensajes: string[]) => {
  console.log(`${mensajes[0]} %c${mensajes.slice(1).join(', ')}`, 'color: #bada55');
}

@Component({
  imports: [],
  templateUrl: './pagina-inicio.component.html'
})
export default class PaginaInicioComponent {

  constructor() {
    log('Constructor');
  }

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

}