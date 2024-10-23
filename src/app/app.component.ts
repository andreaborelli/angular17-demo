import { Component, effect, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule
  ],
  template: `

    <!-- Signal: set e update -->

    <div class="centered sm p-10">

         <h1 class="page-title">Counter Demo with Signal</h1>


         <button class="btn" (click)="dec()">-</button>
         <span class="text-2xl">{{ counter() }}</span> <!-- usare un getter con () per ottenere il valore del signal -->
         <button class="btn" (click)="inc()">+</button>

         <button class="btn"
         (click)="reset()"
         [style.display]="isZero() ? 'none' : 'inline'"
         >reset
        </button>

        <div [hidden]="isZero()">Counter is zero</div>



    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  counter = signal(0);


      constructor() {
        effect(() => {
          console.log('action', this.counter());
          localStorage.setItem('counter', JSON.stringify(this.counter()));
        });

      }

  dec() {
    this.counter.update(c => c - 1);
  }

  inc() {
    this.counter.update(c => c + 1);
  }

  reset() {
    this.counter.set(0);
  }

  isZero() {
    console.log('is zero')
    return this.counter() === 0;
  }

/* Immaginiamo di voler visualizzare un messaggio counter is zero quando il contatore ovviamenete è zero,
potremmo usare un banale ngIf che verifica il valore del counter sia uguale a zero,
<div *ngIf="counter() === 0">Counter is zero</div> ovviemente tutto funzionerà,
oppure si può utilizzare l'attributo hidden: <div [hidden]="counter() !== 0">Counter is zero</div>
andando a nascondere l'elemento quando counter è diverso da zero e ininfluente.
stessa cosa potremmo fare nel button che non ha senzo mostrare il pulsante reset se il counter è già a zero,
potremmo visualizzarlo o meno con ngIf, display none: [style.display]="counter() === 0 ? 'none' : 'inline'"  */

/* ora il problema che tali operazioni:

<div [hidden]="counter() !== 0">Counter is zero</div> e

[style.display]="counter() === 0 ? 'none' : 'inline'"

  in     <button class="btn"
         (click)="reset()"
         [style.display]="counter() === 0 ? 'none' : 'inline'"
         >reset
        </button>

  vengono eseguite troppe volte, ogni volta che viene triggherata la Change Detection
  anche quando counter non viene effettivamente modificato,
  per verificare, invece di scrivere le condizioni inline provare a spostare la condizione
  in un metodo della classe isZero() { return this.counter() === 0; } questa funzione restituirà un booleano
  è cambiamo il template per usare la funzione isZero() invece di scriverla inline.
  ma se inseriamo un console.log('isZero') all'interno del metodo isZero()
  vedremo che all'avvio dell'applicazione viene eseguito molte volte.

  più la nostra view è complessa più avremo di triggher per la Change Detection,
  che se ne parlato nel video di Angular Dev Tool in cui si mostra come Angular trigghera la Change Detection
  noi non abbiamo controllo su quel processo e viene eseguito ogni volta che abbiamo
  eventi, chiamate al server, interval ecc. e alle volte questi vengono eseguiti non da noi,
  ma se usiamo una funzionalità di angular come può essere ngClass e altre direttive,
  ci sono dei triggher automatici dietro le quinte che la fanno scattare,
  quindi maggiore sarà la complessità della view più avremo triggher di questi metodi
  e più metodi avremo del genere del nostro componente, più la nostra applicazione soffrirà di performance,
  ovvio non un'applicazione che ha un banale form di quattro campi e una lista, ma una view più complessa
  ma è bene capire come funziona la Change Detection e come possiamo ottimizzarla.

  i signal risolvono proprio questo problema con Computed Property

  */

}

