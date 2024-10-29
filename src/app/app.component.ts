import { Component, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';


type Product = {
  id: number;
  name: string;
  cost: number;
}

// CONTEXTUAL PROPERTIES

// è anche possibile utilizzare le contextual properties come:
// index, first, last, odd e even
// per recuperare alcune informazioni all'interno dell'ngFor
// come sapere quale sia la posizione index (da 0 a length - 1),
// il primo elemento, l'ultimo, quelli pari o dispari

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

    <!-- ngFor e Signals -->

    <!-- Oppure sapere qual è il primo elento o l'ultimo... -->

    <div class="centered-page sm">
         <li *ngFor="let product of products(); let i = index; let first = first; let last = last ">
             {{i}}. {{product.name}} - {{first}} - {{last}}
         </li>
      </div>


  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {


 products = signal<Product[]>([

  { id: 1, name: 'Chocolate', cost: 3 },
  { id: 2, name: 'Milk', cost: 1 },
  { id: 3, name: 'Biscuits', cost: 2 }

 ])

}

