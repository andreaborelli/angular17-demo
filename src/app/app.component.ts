import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <!-- classe alert hardcoded quindi statica, infatti la possiamo ispezionere nell'HTML -->
    <div
      class="alert"
      [ngClass]="{
        'alert-primary': alert.type === 'primary',
        'alert-danger': alert.type === 'danger',
        'alert-success': alert.type === 'success',
      }"
    >
    {{ alert.msg }} - {{ alert.type }}
    </div>

    <button (click)="alert = {msg: 'hello 1', type: 'primary'}">primary</button>
    <button (click)="alert = {msg: 'hello 2', type: 'danger'}">danger</button>
    <button (click)="alert = {msg: 'hello 3', type: 'success'}">success</button>
      <!-- https://getbootstrap.com/ Include via CDN CSS di bootstrap servito da un host esterno -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  alert = {
    msg: 'hello',
    type: 'primary' // tipo di classe css che voglio applicare
  }

}
