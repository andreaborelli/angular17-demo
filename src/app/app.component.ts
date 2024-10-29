import { Component, signal } from '@angular/core';
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

    <!-- ngIf e Signals -->

    <div class="centered-page sm">

         <button class="btn" (click)="visible.set(!visible())">Click</button>

         <!-- nel template non possiamo usare la funzione update e di conseguenza utilizziamo
          questo approccio: (click)="visible.set(!visible())"
          per evitare di creare un metodo nella classe di app.componente.ts -->

        <h1 class="text-3xl" *ngIf="visible()">Hello</h1>
        
        <!-- quando signal ha un valore true l'elemento viene renderizzato altrimenti no
         *ngIf è una direttiva che distrugge e ricrea l'elemento -->

         <!-- <h1 class="text-3xl" [hidden]="!visible()">Hello</h1> : l'attributo hidden fa un display none quindi l'elemento lo troviamo sempre nel DOM,
          quindi meglio usare le direttive ngIf per distruggere un elemento e ricrearlo -->

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

/* i signal di angular possono essere utilizzati tranquillamente insiame alle direttive:
 ngIf, ngFor, ngSwitch, o con qualunque attributo dinamico del DOM */

 visible = signal(false);

}

