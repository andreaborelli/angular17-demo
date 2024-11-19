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


  <!-- Component LifeCycle - ngOnChanges -->
    <div>
    <app-user-profile [id]="currentId"/> <!-- instanzio componente figlio -->

      <button class="btn"
      (click)="inc()"
      >+</button>

      </div>

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

  currentId = 1; // proprietà passata al componente figlio in maniera statica il valore 1

  inc() {
    if (this.currentId < 10) {
      this.currentId++;
    } else {
      this.currentId = 1;
    }
  }




}

