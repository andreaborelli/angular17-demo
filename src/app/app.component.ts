import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `

<!-- dynamic class -->
  <div
    class="alert"
    [class.primary]="alert.type === 'primary'"
    [class.danger]="alert.type === 'danger'"
    [class.success]="alert.type === 'success'"
    >
        {{alert.msg}}
  </div>

  <!-- rendiamolo dinamico -->

  <button (click)="alert = {type: 'primary', msg: 'primary'}">Primary</button>
  <button (click)="alert = {type: 'danger', msg: 'danger'}">Danger</button>
  <button (click)="alert = {type: 'success', msg: 'success'}">Success</button>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
    .alert {
      padding: 20px;
      border: 4px solid black;
      border-radius: 20px;
  }
    .primary {
      background-color: blueviolet;
      color: white;
  }
    .danger {
      background-color: darkred;
      color: white;
  }
    .success {
      background-color: lightgreen;
      color: black;
  }
  `,
})
export class AppComponent {

  // alert = 'success';
  // msg = 'hello alert!';

  // oggetto alert
  alert = {
    type: 'primary',
    msg: 'hello alert!',
  }


}


