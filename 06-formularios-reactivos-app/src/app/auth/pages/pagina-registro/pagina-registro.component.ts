import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  templateUrl: './pagina-registro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaRegistroComponent { }