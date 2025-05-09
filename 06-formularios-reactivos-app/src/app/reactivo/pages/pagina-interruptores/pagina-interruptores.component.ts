import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  templateUrl: './pagina-interruptores.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInterruptoresComponent { }