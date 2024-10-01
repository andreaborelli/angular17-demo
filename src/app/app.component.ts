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
    <div
      class="alert"
      [ngClass]="{
        'alert-primary': alert.type === 'primary',
        'alert-danger': alert.type === 'danger',
        'alert-success': alert.type === 'success',
      }"
    >
        {{ alert.msg }}
    </div>

    <div class="flex gap-3">
      <button
        class="btn"
        (click)="alert = {msg: 'hello 1', type: 'primary'}"
      >primary</button>
      <button
        class="btn"
        (click)="alert = {msg: 'hello 2', type: 'danger'}"
      >danger</button>
      <button
        class="btn"
        (click)="alert = {msg: 'hello 3', type: 'success'}"
      >success</button>
    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

.btn {
      @apply bg-sky-600 px-3 py-1 rounded-xl text-white
    }

    .alert {
      @apply border-4 border-black rounded-xl p-5 my-3
    }

    .alert-primary {
      @apply bg-sky-600 text-white

    }

    .alert-danger {
      @apply bg-red-600 text-white
    }

    .alert-success {
      @apply bg-green-200 text-black
    }

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
