import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `

    <button (click)="dec()">-</button>
    <button (click)="inc()">+</button>

<hr>
    <a [href]="website">visit website</a> <!-- text interpolation -->
    <!-- per vedere il contenuto della proprietà di website dobbiamo utilizzare
     le parentesi quadre attorno all'attributo href [href] questa tecnica si chiama Property binding
     perchè mettiamo in sincronia una proprietà con un attributo, è quando la proprietà viene aggiornata
     anche l'attributo automaticamente si aggiornerà. Le parentesi quadre indicano che come valore
     un attributo non avrà più una stringa, ma un espressione come fossero delle parentesi graffe,
     questo meccanismo si puù utilizzare per qualunque elemento. -->
  <br>
     <img [src]="image" [alt]="description" [width]="width">
     <!-- qualunque attributo può essere dinamico -->

  `,
  styles: [],
})
export class AppComponent {

  website = 'htttps://www.fabiobiondi.dev';

  image = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3'

  width = 100;

  description = 'Angular logo';

  dec() {
    if (this.width > 100)
    this.width = this.width - 10;
  }
  inc() {
    this.width = this.width + 10;
  }


}


