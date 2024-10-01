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
      <!-- https://getbootstrap.com/ Include via NPM  npm i bootstrap@5.3.3
       poi vedremo la dipendenza installata di bootstrap in file package.json:

      "dependencies": {
        "bootstrap": "^5.3.3",
     },
      e poi in node_modules vedremo la cartella bootstrap, in dist,
      CSS in fine il file bootstrap.min.css, e tutti gli altri file di bootstrap sia compilati che sorgente,
      dopodicchè possiamo includere il file CSS in index.html
      <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"> ma non funzionerà
      perché Angular non sa dove cercare i file CSS, quindi dobbiamo configurare il file angular.json
      in styles aggiungendo il percorso del file CSS di bootstrap, in questo caso node_modules/bootstrap/dist/css/bootstrap.min.css
      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
     -->

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
