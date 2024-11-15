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
    CommonModule, // contiene le direttive di angular come ngIf e ngFor ecc.

],
  template: `

  <!-- Input required -->

      <app-phone
      [url]="url"
      [alt]="alt"
      [showTitle]="true"
      size="sm"
      />
      <app-phone
      url="assets/images/angular.png"
      alt="angular"
      showTitle
      size="md"
      />
      <app-phone
      [url]="url"
      alt="angular"
      showTitle
      size="xl"
      />

        <!-- il passaggio della proprietà size ci permette di avere un'estrema
       flessibilità perchè possiamo passare qualunque dimensione, ma talvolta
       questa flessibilità è pericolosa perchè permette a noi sviluppatori,
       del futuro o a un collega di passare magari una proprietà in maniera
       impropria, un valore che non dovrebbe essere supportato
       possiamo quindi es. stabilire che le larghezze siano solo 2 o 3,
       es. 25, 50, 100 e lo possiamo fare dando la possibilità all'utente di passare
       es. sm che sta per small, xl che sta per large e così via
       es sm sta per small con il valore 50, e xl co il valore a 100 -->

       <!-- Tuttavia se passassimo un valore non corretto:  size="xldhgb"
        cioè non supportato verrà applicato sempre 100
        possiamo evitare di passare dei valori non corretti andando a specificare
        con il literal types e una union (val: 'sm' | 'xl' ) che i valori supportati siano solo sm e xl
        quindi se passiamo qualcosa di non corretto riceveremo un errore di compilazione
         @Input({ transform: (val: 'sm' | 'md' | 'xl' ) => {
                console.log('val', val);
                return val === 'sm' ? 50 : 100;
              // se il valore è sm allora la larghezza è 50, altrimenti 100
                }})
         possiamo anche aggiungere varie unità di misura, è quindi potremmo avere una switch case
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

