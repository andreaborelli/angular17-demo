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
    [ngClass]="
    {primary: alert.type === 'primary',
    danger: alert.type === 'danger',
    success: alert.type === 'success'
    }"
    >
        {{alert.msg}}

<!-- ngClass: le direttive sono degli attributi speciali che ci fornisce angular
 per applicare delle piccole magie nel template   -->

 <!-- una regola per utilizzare una direttiva all'interno del template html
  è quella di importarla nella proprietà imports del decoratore @Components tramite l'apposita classe,
  una volta importata possiamo utilizzarla nel nostro template,
  quindi sia in imports riga 1 che definirla anche tra gli imports
  allora la direttiva sarà disponibile, e questa direttiva
  nello specifico da la possibilità di applicare classi dinamicamente,
  tramite un oggetto chiave/valore dove la chiave è la classe CSS che vogliamo applicare es. primary,
  invece il valore è un booleano es. true
  potremmo anche avere due condizioni true, in questo caso saranno applicate entrambi le classi CSS,
  ovviamente nel caso di Overlap: sovrapposizione di stili css applicati vince la classe che avrà una specificity maggiore
  info su:
           https://www.w3schools.com/css/css_specificity.asp

           https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

           https://css-tricks.com/specifics-on-css-specificity/
  -->

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
