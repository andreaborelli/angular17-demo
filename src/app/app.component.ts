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
    [class]="getCls()"

    >
        {{alert.msg}}

          <!-- per svariate ragioni potrebbe essere che l'applicazione di una classe primary, danger ecc... o qualunque altra classe
           dipenda da un algoritmo più complesso,
           potrebbe quindi avere senso chiamare una funzione che generi il valore di alert,
           in questa funzione potremmo mettere qualunque tipologia di calcoli, dai cicli, a switch, condizioni ecc...
           si può fare wrappando l'attributo class con le perentesi quadre, e invocando la funzione [class]="getCls()"
           che sarà invocata ogni qualvolta il template viene renderizzato -->

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
    switch (this.alert.type) {
      case 'danger':
        return 'alert danger'; // restituisce la classe alert danger
      case 'success':
        return 'alert success';

        case 'primary':
        default:
          return 'alert primary';
  }
/* ebbene ricordare che ad ogni render del componente, la classe getCls() viene invocata,
questo vuol dire che ci potrebbero essere altri pulsanti, campi di input, timer ecc.
che triggherano la change detection ovvero fanno si che il template viene ri-renderizzato,
la funzione getCls() verrà processata ad ogni render anche quando non necessario,
quindi questo approccio meglio evitarlo, per non avere problemi di performance dovuti al fatto che
nella view ci potrebbero essere altri pulsanti, timer, chiamate al server ecc.che triggherano
la change detection quindi il template verrebbe ri-renderizzato, e la getCls()
verrebbe processata ogni volta anche quando non necessario ovvero quando alert non cambia.  */

}

}
