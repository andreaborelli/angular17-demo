import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `

<!-- dynamic class -->
  <div
    class="alert"
    [style.background-color]="alert.bg"
    [style.color]="alert.color"
    [style.font-size.px]="alert.fontSize"
    >
        {{alert.msg}}

  <!-- style suffix operator alternativa:[style.font-size]="alert.fontSize + 'px'"
   possiamo usare anche le altre unità di misura-->

<!-- inline-style classi CSS in in line in modo dinamico, flessibile -->

  </div>

  <!-- rendiamolo dinamico -->

  <button (click)="alert = { bg: 'cyan', color: 'black',fontSize: 10,  msg: 'hello' }">Primary</button>
  <button (click)="alert = { bg: 'red', color: 'white', fontSize: 20, msg: 'white' }">Danger</button>
  <button (click)="alert = { bg: 'green', color: 'white', fontSize: 30, msg: 'Ok!' }">Success</button>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
    .alert {
      padding: 20px;
      border: 4px solid black;
      border-radius: 20px;
  }
  `,
})
export class AppComponent {

  // alert = 'success';
  // msg = 'hello alert!';

  // oggetto alert
  alert = {
    bg: 'red',
    color: 'white',
    msg: 'hello alert!',
    fontSize: 20
  }

}
