import { Component, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';


type Product = {
  id: number;
  name: string;
  cost: number;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

    <!-- ngIf e Signals -->

    <div class="centered-page sm">

        <li *ngFor="let product of products()">{{ product.name }}</li>

        <!-- applichiamo la direttiva *ngFor disponibile grazie al modulo CommonModule
         è facciamo un for of all'interno, quindi: *ngFor="let product of products()"
         ma usiamo le parentesi tonde products() perchè bisogna invocare un getter del signal
         per recuperare il suo valore, e vedremo la lista renderizzata. -->

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

/* i signal possono contenere all'interno primitive o anche oggetti,
array e in questo caso abbiamo un signal chiamato
products che contiene al suo interno un array di prodotti,  products = signal<Product[]> <> generics
abbiamo usato il generics tra l'altro per tipizzare l'array come Product array,
che contiene le proprietà id: name: e cost:   */

/* i signal di angular possono essere utilizzati tranquillamente con ngFor,
nel caso in cui volessimo visualizzare es. tre tag <li> dinamicamente,
quindi sull'elemento   */

 products = signal<Product[]>([

  { id: 1, name: 'Chocolate', cost: 3 },
  { id: 2, name: 'Milk', cost: 1 },
  { id: 3, name: 'Biscuits', cost: 2 }

 ])

}

