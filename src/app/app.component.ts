import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';

type Product = {
  id: number;
  name: string;
  cost: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `

    <!-- come renderizzare una lista di elementi acquisiti da un array es. di prodotti -->

    <div class="centered-page sm">
      <li *ngFor="let product of products; let i = index; let last = last; let odd = odd"
      [style.border-bottom]="last ? '2px solid white' : null"
      [style.background-color]="odd ? 'gray': 'cyan'">
        {{i + 1}} - {{product.name}} {{last}}<!-- product elemento su cui stiamo iterando -->
      </li>
      <pre>{{ products | json }}</pre>

      <!-- Il punto interrogativo (?) in Angular è usato per l'operatore ternario,
      che è una forma abbreviata per eseguire una condizione if-else all'interno del template.

      condizione ? valore_se_vero : valore_se_falso

      condizione: Se è vera, Angular applica il valore_se_vero.
        Altrimenti, applica il valore_se_falso.
      -->

      <!-- [style.border-bottom]="last ? '2px solid white' : null" se è l'ultimo elemento (last) applica il bordo altrimenti null, non facciamo nulla

      <!-- products è l'intero array, che contiene più elementi (nel tuo caso un array di oggetti Product).
            product è la variabile singola che rappresenta il singolo elemento su cui si sta iterando
            durante ciascun ciclo del *ngFor. -->

      <!-- Significa che per ogni ciclo *ngFor, Angular estrae un singolo product dall'array products,
       e quindi puoi accedere alle proprietà del singolo product (come product.id, product.name, ecc.).

        In sintesi, products è l'array su cui stai iterando, mentre product è la singola istanza che
        rappresenta ogni elemento di quell'array. -->

    <!-- In Angular, all'interno del ciclo *ngFor, oltre a iterare sugli elementi di un array,
      puoi accedere anche ad alcune informazioni aggiuntive, come l'indice dell'elemento corrente.
          let i = index
          La sintassi let i = index è usata per catturare l'indice corrente di ogni iterazione del ciclo *ngFor.
          L'indice parte da 0 e aumenta di uno per ogni iterazione.
          Questo può essere utile quando vuoi mostrare la posizione dell'elemento nell'array.

          let product of products: Qui stai iterando su ogni product dell'array products.
          let i = index: i è la variabile che memorizza l'indice di ogni iterazione.
          i + 1 array parte da 1 invece che 0 -->


          <!-- first: true se l'elemento è il primo dell'array.
               last: true se l'elemento è l'ultimo dell'array.
               odd: true se l'indice dell'elemento è dispari.
               even: true se l'indice dell'elemento è pari.
               es applicare classi css ad uno specifico elemento
               -->

    </div>


  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  products: Product[] = [
    { id: 1, name: 'Chocolate', cost: 3 },
    { id: 2, name: 'Milk', cost: 1 },
    { id: 3, name: 'Biscuits', cost: 2 }
  ]


}
