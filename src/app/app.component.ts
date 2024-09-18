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
    [ngClass]="getCls()"
    >
        {{alert.msg}}

<!-- ngClass: le direttive sono degli attributi speciali che ci fornisce angular
 per applicare delle piccole magie nel template   -->

 <!-- la direttiva ngClass non solo offre la possibilità di applicare delle classi dinamicamente tramite un oggetto
  con chiave/valore ma supporta anche degli array es. [ngClass]="['class1', 'class2']"
  può essere generato dinamicamente es. un array di classi CSS generato da una funzione, un metodo getCls()
  inoltre supporta anche le stringhe -->


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

  getCls() {
    // 1. string
    // return 'alert primary';

    // 2. array
    // return ['alert', 'primary'];
    
    // 3. object
    return {
      'success': this.alert.type === 'success',
      'primary': this.alert.type === 'primary',
      'danger': this.alert.type === 'danger',
    }

  }


}
