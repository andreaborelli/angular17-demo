import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `


  <div class="centered-page sm">

    <img [src]="url" alt="">

  </div>

  <br>

  <div class="centered-page sm">

    <button (click)="url = 'assets/images/react.png'">Load React</button>
    <br>
    <button (click)="url = 'assets/images/js.png'">Load JS</button>
    <!-- immagini automaticamente nella build caricate da assets/images -->
  </div>
  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  url = "assets/images/angular.png"



}
