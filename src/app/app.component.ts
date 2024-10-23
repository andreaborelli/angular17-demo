import { Component, effect, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent
  ],
  template: `

    <!-- Signal: set e update -->

    <div class="centered sm p-10">

         <h1 class="page-title">Counter Demo with Signal</h1>

         <button class="btn" (click)="dec()">-</button>
         <span class="text-2xl">{{ counter() }}</span> <!-- usare un getter con () per ottenere il valore del signal -->
         <button class="btn" (click)="inc()">+</button>

         <button class="btn" (click)="reset()">reset</button>


    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  counter = signal(0); /* con signal iniziali il counter a 0,
                          in automatico counter viene inizializzato
                          come un WritableSignal<number> grazie all'inferenza */
  // dec() {
  //   this.counter.update(c => {
  //     console.log(c);
  //     return c - 1
  //   });
  // }

      constructor() {  /* effect: è una funzione che permette di avviare una azione
                                  ogni volta che viene aggiornato il signal */
        effect(() => { // effect si attiva ogni volta che il signal viene aggiornato
          console.log('action', this.counter()); /* la funzione effect viene invocata ogni qual volta aggiorniamo il signal
                                                    semplicemente usando il signal al suo interno: this.counter() è rappresenta una dipendenza dell'effect
                                chiave              quindi ogni signal che usiamo dentro effect comporterà l'esecuzione della funzione al suo interno */
          localStorage.setItem('counter', JSON.stringify(this.counter())); /* salviamo il valore del counter in localStorage, con un approccio totalmente reattivo */
        });

      }


  dec() {
    this.counter.update(c => c - 1); /* update è un metodo di WritableSignal che permette di aggiornare il valore del signal */
  }
  // uso c iniziale della proprietà counter, per rappresentare la variabile all'interno della funzione per renderlo più coinciso, tanto se siamo all'interno della funzione del signal sappiamo che stiamo lavorando sul counter


  inc() {
    this.counter.update(c => c + 1);
  }

  reset() {
    this.counter.set(0); /* usiamo set perchè il valore da aggiornare non dipende da quello precedente */
  }

/* => è una arrow function, che è una funzione anonima, che non ha un nome,
e che non ha un this, quindi non ha un contesto, quindi non ha un this,
quindi non ha un prototype, quindi non ha un costruttore, quindi non ha un arguments,
quindi non ha un caller, quindi non ha un length, quindi non ha un name */


  // senza signal

  // counter = 0;

  // dec() {
  //   this.counter--;
  // }

  // inc() {
  //   this.counter++;
  // }

  // reset() {
  //   this.counter = 0;
  // }

  // viene triggherata la change detection, che vuol dire che viene aggiornato il DOM

}

