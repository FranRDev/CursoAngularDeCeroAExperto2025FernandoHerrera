import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'togglecase' })
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, upper: boolean = true): string {
    return upper ? value.toUpperCase() : value.toLowerCase();
  }

}