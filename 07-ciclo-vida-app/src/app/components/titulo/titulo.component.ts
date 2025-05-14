import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'titulo',
  imports: [],
  templateUrl: './titulo.component.html',
})
export class TituloComponent {

  titulo = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

}