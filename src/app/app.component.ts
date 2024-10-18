import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule // CommonModule è un modulo che contiene le direttive di base di Angular, come *ngIf, *ngFor, ecc.
  ],
  template: `

    <!-- Angular Dev Tools - Profiler - Analisi Change Detection -->

     <button (click)="doSomething()">toggle</button>
    <input type="text" (keydown)="doSomething()">

<br>

    <a href="https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh"
       target="_blank" rel="noopener noreferrer">Angular Dev Tools - Chrome Extension</a>

       <button (click)="load()">load</button>
       {{items()}}
  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {



  doSomething() {

  }

  constructor() {
    setInterval(() => {

    }, 1000)
  }



  http = inject(HttpClient);
  items = signal<any[]>([])

  load() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.items.set(res)
      })
  }

}

