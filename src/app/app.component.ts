import { Component, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';

type Product = {
  id: number;
  name: string;
  cost: number;
}

const initializeState: Product[] = [ // stato iniziale di un array di oggetti
  { id: 1, name: 'Chocolate', cost: 3 },
  { id: 2, name: 'Milk', cost: 1 },
  { id: 3, name: 'Biscuits' , cost: 2 }
]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

    <!--  @for e @empty blocks-->

    <!-- usando un signal dobbiamo usare product con function con parentesi tonde -->

    <!-- l'espressione track serve per indicare qual'è la chiave univoca che Angular utilizzerà per ottimizzare i render.
      Andando ad applicare questa chiave univoca, Angular farà si che al render successivo, quando mancherà o verrà aggiunto
      un nuovo elemento dalla lista, riuscirà a riciclare alcuni elementi del DOM ed evitare
      che vengano effettuate delle operazioni sugli elementi che già esistevano nel render precedente e che sono identici
      nel render succcessivo.
      É un ottimizzazione che anche nel ngFor si poteva, e anzi si doveva fare, se volevamo tenere il massimo delle performance
      da una lista dinamica. Tuttavia con @for è diventata obbligatoria.
      Utilizziamo product.id che di solito è la proprietà univoca che differenzia ogni elemento della lista in modo sicuro. -->

    <!-- il @for ci permette anche di utilizzare un nuovo comando in associazione, che è @empty,
     che in pratica al suo interno potrà renderizzare degli elementi del DOM, quindi del template,
     nel momento in cui l'array è vuoto, oppure appunto non contiene valori come NULL o UNDEFINED.  -->

    <div class="centered-page sm">

      @for (product of products(); track product.id) {
          <h1>{{ product.name }}</h1>
      } @empty {
          <div>Empty list</div>
          <button class="btn" (click)="loadProducts()">Load</button>
      }

      <!-- <pre>{{ products() | json}}</pre> -->

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

 products = signal<Product[]>([]);

 loadProducts() {
    this.products.set(initializeState);
 }

}

