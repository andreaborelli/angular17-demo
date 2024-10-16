import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `

    <!-- come distruggere e creare elementi dal DOM utilizzando la direttiva NGIF   -->

    <div class="centered-page sm">
      <button class="btn" (click)="visible = !visible">Click</button>
      <h1 class="text-3xl" *ngIf="visible">Hello</h1>
      <!-- *ngIf è una direttiva strutturale che permette di distruggere e creare elementi dal DOM -->

      <!-- quando la proprietà visible sarà true l'elemento sarà renderizzato, altrimenti sarà distrutto -->

         <!-- <h1 class="text-3xl" [hidden]="!visible">Hello</h1> -->
         <!-- l'attributo hidden è un modo per nascondere un elemento dal DOM, ma non lo distrugge -->

    </div>


  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  visible = false; // true fa vedere eleimento, false lo nasconde di default



}
