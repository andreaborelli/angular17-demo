import { Component, computed, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from "./shared/components/phone.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    PhoneComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
    ,
],
  template: `

  <!--  creo componenti riutilizzabili il cui aspetto è personalizzabile dall'esterno
  in pratica istanziamo es. 2 volte app-phone è passare delle proprietà differenti,
  come in qualunque altro linguaggio di programmazione,
  quando istanziamo una classe e passiamo es. delle proprietà con i setter per personalizzarle il comportamento.
  possiamo avere più proprietà in input.
  con le quadre come per gli attributi del DOM quindi di un qualunque elemento HTML anche per i componenti
  possiamo passare un espressione che viene processata in fase di render e poi quindi viene passato il componente
  il valore dell'espressione in questo caso landscape che è il valore di alt -->

      <app-phone [url]="url" [alt]="alt"/>
      <app-phone url="assets/images/angular.png" alt="angular"/>

<!-- AppComponent componente parent -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {


  url = 'assets/images/pexels.png';
  alt = 'landscape';
}

