import { Component } from '@angular/core';
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

  <!-- Input required -->

      <app-phone
      [url]="url"
      [alt]="alt"
      [showTitle]="true"
      />
      <app-phone
      url="assets/images/angular.png"
      alt="angular"
      showTitle
      />

      <!-- [showTitle]="true": tuttavia essendo una proprietà in Input,
        possiamo eventualmente passarlo dall'esterno nel componente
        se passiamo la proprietà showTitle="true" senza le quadre riceveremmo un errore.
        il problema è che showTitle si aspetta un booleno, ma true viene trattato come una stringa
        perchè non abbiamo messo le parentesi quadre [showTitle]="true"
        quando IMPOSTIAMO UN ATTRIBUTO SENZA LE QUADRE STIAMO SEMPRE PASSANDO UNA STRINGA
        usiamo quindi le quadre e il data type viene mantenuto, quindi true è effettivamente un booleano.

        Una nuova feature introdotta da Angular 16 in poi, è la possibilità di avere un transform booleanAttribute
        questo attributo fa si che sia possibile passare un booleano true hardcoded senza la necessità
        di specificare le quadre così:  showTitle
        E neppure di indicare il boolean true, molto utile e presente
        anche in altri framework JSX come sistema di template.
        -->


<!-- AppComponent componente parent -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  url = 'assets/images/pexels.png';
  alt = 'landscape';

}

