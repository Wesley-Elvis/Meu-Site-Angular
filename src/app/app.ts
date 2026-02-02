import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rodape } from "./Meu/rodape/rodape";
import { Cabecalho } from "./Meu/cabecalho/cabecalho";
import { DivHorizontal } from "./Meu/div-horizontal/div-horizontal";
import { Corpo } from "./Meu/corpo/corpo";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, DivHorizontal, Corpo],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Meu-Site-Angular');
}
