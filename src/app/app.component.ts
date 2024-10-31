import { Component, computed, signal } from '@angular/core';
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

    <!--  @for e computed Signals -->

    <!-- il @for ci permette anche di utilizzare un nuovo comando in associazione, che è @empty,
     che in pratica al suo interno potrà renderizzare degli elementi del DOM, quindi del template,
     nel momento in cui l'array è vuoto, oppure appunto non contiene valori come NULL o UNDEFINED.  -->

     <!-- Tuttavia non sempre vogliamo renderizzare il contenuto nello stesso punto in cui c'è la lista.
      Potremmo avere una view molto complessa e avere dell'altro contenuto per es.
      altrove che vogliamo nascondere o visualizzare quando ci sono o non ci sono elementi nella lista.
      In tal caso possiamo creare una computed property es. uno stato derivato da products che chiameremo
      es. noItems, indicando che non ci sono elementi nel carrello o comunque visibili e
      semplicemente restituirà un booleano quando la length di products è zero:
      noItems = computed(() => this.products().length === 0);
      poi utiliziamo ngIf per renderizzare il messaggio ci son N prodotti quando ci sono elementi per questo usiamo
      il not ! davanti a noItems, è all'interno possiamo visualizzare anche il contenuto:
      <div *ngIf="!noItems()">There are {{products().length}} products</div>
      solo quando i prodotti sono nel carrello, altrimenti è inutile visualizzare il messaggio
      allo stesso modo possiamo sostituire anche il product length con un signal derivato che ci restituisce,
      in questo caso semplicemente la length e non un booleano.
      abbiamo visto come Mixare direttive con i nuovi blocchi for if ecc.
      -->

    <div class="centered-page sm">

      @for (product of products(); track product.id) {
          <h1>{{ product.name }}</h1>
      } @empty {
          <div>Empty list</div>
          <button class="btn" (click)="loadProducts()">Load</button>
      }

      <div *ngIf="!noItems()">There are {{ totalProducts() }} products</div>

      <!-- <pre>{{ products() | json}}</pre> -->

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

 products = signal<Product[]>([]);

 noItems = computed(() => this.products().length === 0);

 totalProducts = computed(() => this.products().length);

 loadProducts() {
    this.products.set(initializeState);
 }

}

