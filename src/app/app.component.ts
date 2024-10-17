import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule // CommonModule è un modulo che contiene le direttive di base di Angular, come *ngIf, *ngFor, ecc.
  ],
  template: `


    <!-- come generare dei menu dinamicamente utilizzando ngFor e ngSwitch insieme -->

<div class="centered-page sm">

    <button *ngFor="let item of menuItems" class="btn" (click)="section = item.section">{{item.label}}</button>
    <!-- 2. utilizzo ngFor per ciclare l'array di oggetti e generare un bottone per ogni oggetto.
     3. al click del bottone assegno alla variabile section il valore della proprietà section dell'oggetto. -->

    <hr>

  <div [ngSwitch]="section">
    <div *ngSwitchCase = "'home'">Home</div>
    <div *ngSwitchCase = "'step1'">Step 1</div>
    <div *ngSwitchCase = "'step2'">Step 2</div>
    <div *ngSwitchCase = "'final'">Final</div>
    <div *ngSwitchDefault>Select a button</div>
  </div>

</div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {


 section: Section = null; // 5. definisco una variabile di tipo Section e la inizializzo a null

 menuItems: MenuItems[] = [ // 1. definisco un array di oggetti con due proprietà
  {section: 'home', label: 'Home'},
  {section: 'step1', label: 'Step 1'},
  {section: 'step2', label: 'Step 2'},
  {section: 'final', label: 'Final'},
 ]

// 4. tipizzazione degli oggetti

}

/* la tipizzazione degli oggetti va messa fuori dalla classe es. AppComponent,
oppure e consigliato creare un file app.models.ts e importarlo */
type MenuItems = {
  section: Section;
  label: string;
}

type Section = 'home' | 'step1' | 'step2' | 'final'| null; // 6. definisco un tipo Section con i valori possibili e null
