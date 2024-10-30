import { Component, signal } from '@angular/core';
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

    <!--  @if block -->

    <div class="centered-page sm">

      @switch (currentStep()) {
        @case ('step1') {
          <h1>Step 1</h1>
          <button class="btn" (click)="currentStep.set('step2')">Next</button>
        }
        @case ('step2') {
          <h1>Step 2</h1>
          <button class="btn" (click)="currentStep.set('final')">Next</button>
        }
        @case ('final') {
          <h1>Final Step</h1>
        }
        @default () {
          <div>Welcome</div>
          <button class="btn" (click)="currentStep.set('step1')">Next</button>
        }
      }

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  currentStep = signal<'step1' | 'step2' | 'final' | null>(null);

  // currentStep = signal<string | null>(null); // tipizziamo il signal con stringa o null con i generics <>

 // string | null: è la union type che specifica che currentStep può contenere o una stringa o un valore nullo.

}

