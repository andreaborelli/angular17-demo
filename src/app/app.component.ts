import { Component, computed, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

  <!-- Multiple SIgnals - create a tabbar navigation -->

  <!-- al click del pulsante mostra il contenuto dell'oggetto -->

  <!-- es. che usa sia il FOR che l'IF all'interno dello stesso template
   abbiamo unarray di prodotti e utilizziamo il FOR per visualizzare n pulsanti
   sulla base del numero di prodotti, e ora immaginiamo di voler la descrizione per ogni prodotto
   che aggiungiamo anche al type. Al click del pulsante vogliamo visualizzare la descrizione
   sotto a tale pulsanti.
   Inanzitutto potermmo fare: al click di un pulsante andare ad invocare il metodo selectProduct()
   passando il prodotto che ho cliccato: selectProduct(product)

   selectProduct(product: Product){

  }
   Questo prodotto lo salviamo in un nuovo signal che indica qual'è il prodotto attivo,
   il prodotto selezionato, che chiamiamo:

   activeProduct = signal<Product | null>(null);

   che è un signal che inizializiamo a null, visto che ovviamente all'inizio, all'avvio del componente

      activeProduct = signal<Product | null>(null); non sarà valorizzato ma potrà contenere NULL,
        come viene specificato tra i generics (parentesi angolari) oppure un prodotto usando union type di typeScript |

        quindi nel metodo di selectProduct() possiamo scrivere:

        this.activeProduct.set(product);

        con il metodo set() dei signal e salvare al suo interno il nostro prodotto

        Così facendo ad ogni click activeProduct verrà valorizzato.
        infatti con PIPE JSON è vedremo che al click abbiamo l'intero oggetto del prodotto selezionato,
        è potremmo visualizzare la descrizione, il name, il costo ecc.

        forse: dobbiamo usare il punto di domanda ? perchè activeProduct come specificato:

        <Product | null> è potenzialmente NULL e quindi se non avessimo lo STRICT MODE () di TypeScript
        in questo caso avremmo un eccezione al primo render perchè essendo NULL
        il nostro oggetto di activeProduct

              <pre>{{ activeProduct()?.description}}</pre>

        description ovviamente sarebbe letto da un oggetto null generando un eccezzione a runtime

        quindi usiamo il ? per evitare questo problema. ora al click vedremo la descrizione del prodotto,
        oppure il costo, il nome ecc.
      -->

    <div class="centered-page sm">
    @for (product of products(); track product.id) {

      <button class="btn" (click)="selectProduct(product)">{{ product.name }}</button>
                  }
      @if (activeProduct()) {
        <pre>{{ activeProduct()?.name}}</pre>
        <pre>{{ activeProduct()?.cost}}</pre>
        <pre>{{ activeProduct()?.description}}</pre>
      } @else {
        <div>Select a product</div>
      }

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {


  products = signal<Product[]>([
    { id: 1, name: 'Chocolate', cost: 3, description: 'lorem...' },
    { id: 2, name: 'Milk', cost: 1, description: 'bla bla..' },
    { id: 3, name: 'Biscuits', cost: 2, description: 'super good!' },
  ]);

  activeProduct = signal<Product | null>(null);

  selectProduct(product: Product){
    this.activeProduct.set(product);
    console.log(product);
  }

}

type Product = {
  id: number;
  name: string;
  description: string;
  cost: number;
}

