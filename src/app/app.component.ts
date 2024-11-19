import { UserProfileComponent } from './shared/components/user-profile.component';
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
    UserProfileComponent,
    CommonModule, // contiene le direttive di angular come ngIf e ngFor ecc.

],
  template: `

  @if(visible){
    <app-user-profile [id]="1"/>
  }

  <!-- Component LifeCycle - ngOnInit e ngOnDestroy -->

    <app-user-profile [id]="1"/> <!-- instanzio componente figlio -->

<!-- [id]="1" con le quadre perchè lo vogliamo passare di tipo number,
 altrimenti senza le quadre sarebbe una stringa -->

        <button (click)="visible = !visible">
          Toggle
        </button>

      <app-phone
      [src]="url"
      [alt]="alt"
      [showTitle]="true"
      size="sm"
      />

<!-- AppComponent componente parent -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  url = 'assets/images/pexels.png';
  alt = 'landscape';

  visible = true;

}

