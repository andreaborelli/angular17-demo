import { Component } from '@angular/core';
import { DatePipe, DecimalPipe, JsonPipe } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DatePipe, // dichiaro il pipe per utilizzarlo
    DecimalPipe,
    JsonPipe
  ],
  template: `

        <!-- Pipes | : buit-in sono dei formatter di dati,
          realtà un formatter è un array di un certo tipo filtrato in un array di un'altro tipo,
          con meo o più elementi, rimappato, o un array di oggetti che diventi un array di stringhe, indifferente  -->

           <!-- il vantaggio delle pipe non è solo il formatter di per se, è che hanno performance molto elevate
            perchè la funzione del pipe viene invocata solo quando cambia il valore che gli passiamo
            è non selvaggiamente, come invece potrebbe accadere se chiamiamo una funzione
            nel template che restituisce il valore formattato, che invece verrebbe invocato
            ogni volta che il template viene rirenderizzato   -->

  <div class="centered-page sm flex flex-col gap-3">

  <div>Date 1 - {{today | date: 'dd-MM-yyyy'}}</div> <!-- date nome de selector del pipe -->
  <div>Date 2 - {{timestamp | date: 'hh:mm:ss'}}</div> <!-- formattazione di default -->

  <div>{{value | number: '1.2-4'}}</div> <!-- number: '1.2-4' 1 numero intero,
                                                              2 numero di decimali,
                                                              3 numero minimo di cifre,
                                                              4 numero massimo di cifre -->

<pre>{{user | json}}</pre> <!-- json: formatta l'oggetto in json; una sorta di JSON stringify -->
<pre>{{users | json}}</pre> <!-- async pipe permette di sottoscrivere un observable direttamente nel template -->
<!-- custom pipe: creare un pipe custom per formattare i dati in modo personalizzato -->

  </div>


  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  today = new Date();
  timestamp = 1702423006;
  value = 1.232848327489237
  user = { name: 'Andrea', surname: 'Borelli' }
  users = [{ name: 'Andrea', surname: 'Borelli' }, { name: 'Andrea', surname: 'Borelli' }]


}
