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

  <!-- Input Setters -->

    <div>
   <!--  <app-user-profile [id]="currentId"/> instanzio componente figlio -->

    <button
        class="btn"
        (click)="inc()"
      >+</button>

      <button class="btn" (click)="add()">add</button>

      <button class="btn" (click)="doNothing()">CLICK ME</button>
      <input type="text" (keydown)="doNothing()">

      <app-user-profile
        [id]="currentId"
        [items]="list"
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

  list = [1, 2, 3]

  add() {
    this.list = [...this.list, 4]
  }

  inc() {
    if (this.currentId < 10) {
      this.currentId++;
    } else {
      this.currentId = 1;
    }
  }

  doNothing() {

  }

}

