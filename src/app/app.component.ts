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

    <button class="btn" (click)="section = 'home'">Home</button>
    <button class="btn" (click)="section = 'step1'">Step 1</button>
    <button class="btn" (click)="section = 'step2'">Step 2</button>
    <button class="btn" (click)="section = 'final'">Final</button>
    <hr>
  <div [ngSwitch]="section"> <!-- ngSwitch è una direttiva che permette di fare un controllo su una variabile
                                  e in base al suo valore renderizza un blocco di codice o un altro -->
    <div *ngSwitchCase = "'home'">Home</div> <!-- *ngSwitchCase che accetta un'espressione,
                                                  per questo passiamo la stringa tra apicetti,
                                                  potrebbe essere anche una variabile -->
    <div *ngSwitchCase = "'step1'">Step 1</div>
    <div *ngSwitchCase = "'step2'">Step 2</div>
    <div *ngSwitchCase = "'final'">Final</div>
    <div *ngSwitchDefault>Select a button</div> <!-- *ngSwitchDefault è un blocco di codice che viene renderizzato
                              quando nessun *ngSwitchCase è soddisfatto -->
      <!-- <div *ngIf="section === 'home'">Home</div>
      <div *ngIf="section === 'step1'">Step 1</div>
      <div *ngIf="section === 'step2'">Step 2</div>
      <div *ngIf="section === 'final'">Final</div> -->

          <!-- tanti if che fanno un contollo sulla stessa variabile e bene usare ngSwitch -->

  </div>
    </div>


  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

 section: 'home' | 'step1' | 'step2' | 'final'| null = null;

}
