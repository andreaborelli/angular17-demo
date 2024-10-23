import { Component, computed, effect, signal } from '@angular/core';
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
         <span class="text-2xl" [style.color]="isZeroColor()">{{ counter() }}</span> <!-- usare un getter con () per ottenere il valore del signal -->
         <button class="btn" (click)="inc()">+</button>

         <button
            class="btn"
            (click)="reset()"
            [style.display]="hideIfZero()"
          >reset</button>

          <div [hidden]="!isZero()">Counter is zero!</div>

    </div>

    <button (click)="doNothing()">doNothing</button>
    <input type="text" (keydown)="doNothing()" class="input input-bordered">

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
      hideIfZero = computed(() => {
        return this.counter() === 0 ? 'none' : 'inline'
      })

      isZero = computed(() => {
        return this.counter() === 0
      })


      isZeroColor = computed(() => {
        return this.counter() === 0 ? 'red' : 'green'
      })

  dec() {
    this.counter.update(c => c - 1);
  }

  inc() {
    this.counter.update(c => c + 1);
  }

  reset() {
    this.counter.set(0);
  }

  // isZero() {
  //   console.log('is zero')
  //   return this.counter() === 0;
  // }


  doNothing() {
    console.log('doNothing')
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


  Abbiamo un template dinamico che imposta gli attributi display e hidden:

          <button class="btn"
         (click)="reset()"
         [style.display]="isZero() ? 'none' : 'inline'"
         >reset
        </button>

        <div [hidden]="isZero()">Counter is zero</div>

        invocando una funzione isZero() ogi volta che la Change Detection viene triggherata,
        il template processa la funzione isZero() che restituisce un booleano,
        verifica che il counter sia uguale a zero o meno e applica eventualmente il display none o inline,
        oppure true o false nel caso dell'hidden, ma la funzione viene invocata troppe volte,
        ogni volta che trigghera la Change Detection, anche quando clicchiamo sul pulsante doNothing
        è nell'input che chiama sempre doNothing() una funzione che non fa nulla se non un console.log

        come ottimizzare il tutto

        i signal vengono in aiuto proprio per queste situazioni,

        invece di invocare questa funzione, andremo a creare un signal derivato,
        possiamo creare un signal attraverso la proprietà computed che importiamo da angular core
        e in questa computed possiamo inserire una funzione che restituisce per es: true o false in questo caso,
        visto che isZero ci serve come booleano:

          isZero = computed(() => {
        console.log('is zero')
        return true
      })

      isZero = computed(() => {
        return this.counter() === 0
      })

        isZero viene invocato solo una volta all'avvio dell'applicazione, anche se scriviamo nel campo input

        la computed property viene processata solo quando effettivamente una sua dipendenza interna cambia,
        in questo caso il counter, con enormi benefici in termini di performance,
        ora vedremo che effettivamente non avremo mai il console.log della computed
        fino a che non viene aggiornato il signal.

        possiamo anche creare più di uno stato derivato da un signal,
        ad esempio:
        potremmo anche creare un signal derivato che ci restituisce direttamente la stringa none o inline
        creando un signal derivato hideIfZero facendo il controllo se è o meno uguale a zero,
        ma restituiamo direttamente la stringa none o inline:


     hideIfZero = computed(() => {
        return this.counter() === 0 ? 'none' : 'inline'
      })


        così facendo display none viene effettivamente processata la funzione hideIfZero()
        solo quando cambia il counter,


        applichiamo il colore nel momento in cui il counter e zero:


      isZeroColor = computed(() => {
        return this.counter() === 0 ? 'red' : 'green'
      })

  */

}

