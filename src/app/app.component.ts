import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <!-- Tailwind CSS -->

  <div class="centered-page sm flex flex-col gap-3">

        <h1 class="page-title">Alert Example</h1>

        <div
          class="alert"
          [ngClass]="{
            'alert-info': alert.type === 'primary',
            'alert-error': alert.type === 'danger',
            'alert-success': alert.type === 'success'
          }"
        >
            {{ alert.msg }} - {{alert.type}}
        </div>

        <div class="flex gap-3">
          <button
            class="btn"
            (click)="alert = {msg: 'hello 1', type: 'primary'}">primary</button>
          <button
            class="btn"
            (click)="alert = {msg: 'hello 2', type: 'danger'}">danger</button>
          <button
            class="btn"
            (click)="alert = {msg: 'hello 3', type: 'success'}">success</button>
        </div>

        <input type="text" placeholder="Type here"/>

    <h4>Guida Angular / Daisy UI and Tailwind</h4>
    <a href="https://daisyui.com/">https://daisyui.com/</a>

</div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  alert: Alert = {
    msg: 'hello',
    type: 'primary' // tipo di classe css che voglio applicare
  }

  /*
   */

}
