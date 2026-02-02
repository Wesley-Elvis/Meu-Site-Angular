import { Component } from '@angular/core';

@Component({
  selector: 'app-div-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './div-horizontal.html',
  styleUrl: './div-horizontal.css',
})
export class DivHorizontal {

   imagemAtual = 1;

  backgroundImage = 'url("TI-4.jpg")';

  alternarImagem(): void {
    if (this.imagemAtual === 1) {
      this.backgroundImage = 'url("TIm.png")';
      this.imagemAtual = 2;
    } else {
      this.backgroundImage = 'url("TI-4.jpg")';
      this.imagemAtual = 1;
    }
  }

}
