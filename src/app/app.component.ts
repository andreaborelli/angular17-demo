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

      <app-phone/>
      <app-phone/>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {


}

