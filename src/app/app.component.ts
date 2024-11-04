import { Component, computed, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';

type Product = {
  id: number;
  name: string;
  cost: number;
}

const initialState: Product[] = [
  {id: 1, name: 'Chocolate', cost: 3},
  {id: 2, name: 'Milk', cost: 1},
  {id: 3, name: 'Biscuits', cost: 2},
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

    <!-- Contextual Variables, @If inside @for -->

      <!-- il comando FOR supporta anche delle variabili contestuali,
       è possibile recuperare l'index es. del prodotto cui stiamo iterando
       è salvarlo in una variabile i da mostrare poi all'interno del FOR su ogni elemento -->

       <!--  VERSIONE AGGIORNATA.
          Utilizziamo le contextual properties direttamente all'interno del blocco senza
          la necessità di usare degli alias -->

          <!-- first: primo elemeto
               odd: elemento dispari
               even: elemento pari
                -->

    <div class="centered-page sm">
    @for (product of products(); track product.id) {
              <li>
                  {{$index + 1}}. {{product.name}}
                  @if($last) {
                      <hr>
                  }
              </li>
          } @empty {
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

  products = signal<Product[]>([])

  noItems = computed(() => this.products().length === 0)
  totalProducts = computed(() => this.products().length)

  loadProducts() {
    this.products.set(initialState)
  }
}

