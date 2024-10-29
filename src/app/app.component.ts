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

    <div class="centered-page sm flex">

     @if (logged()) {

      <h1 class="page-title">Hi Dev</h1>
      <button class="btn" (click)="logout()">Logout</button>

     }@else {

      <h1 class="page-title">Login</h1>
      <button class="btn" (click)="signIn()">Sign In</button>

     }

    </div>
    
  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  // da Angular 17 abbiamo a disposizione delle alternative alle direttive come ngIf ngFor e ngSwitch

  logged = signal(false);

  signIn() {
    this.logged.set(true);
  }

  logout() {
    this.logged.set(false);
  }

}

