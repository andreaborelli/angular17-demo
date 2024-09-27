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
    <!-- classe alert hardcoded quindi statica, infatti la possiamo ispezionere nell'HTML -->
    <div
      class="alert"
      [ngClass]="{
        'bg-primary': alert.type === 'primary',
        'bg-danger': alert.type === 'danger',
        'bg-success': alert.type === 'success',
      }"
    >
        {{ alert.msg }}
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

  alert: Alert = {
    msg: 'hello',
    type: 'primary' // tipo di classe css che voglio applicare
  }


  /*
    TYPED VERSION

    una soluzione alternativa in cui l'oggetto alert è tipizzato al type custom che abbiamo chiamato Alert.

    Il vantaggio di questo approccio è che, grazie alla Union Type
    type: 'primary' | 'danger' | 'success'
    non sarà possibile inserire degli alert type con stringhe errate.

    Ad esempio, il seguente codice restituirebbe un'eccezione a compile time, perché xyz non è un valore valido per la proprietà type:

    alert = { msg: 'hello', type: 'xyz' }*/

}
