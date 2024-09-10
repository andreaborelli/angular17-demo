import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>{{yourName}}</h1>
  {{currentIndex}} <!-- Interpolation - Template Tags -->`,
  styles: [],
})
export class AppComponent {

  yourName = 'Andrea';

  currentIndex = 10;

  constructor() {
    setInterval(() =>{
      this.currentIndex++;
    }, 2000)
  }
}


/* template renderizzato > aggiornato in automatico
dietro le quinte c'è un meccanismo chiamato change detection
in pratica il template di un componente angular
viene automaticamente renderizzato
ogni volta che ci sono 3 situazioni/scenari
   1 event di mouse e tastiera
   2 operazioni lato server, che appunto comunicano con una REST API
   3 timer: setInterval, setTimeout */
