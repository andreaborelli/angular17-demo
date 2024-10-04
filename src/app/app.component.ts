import { Component, ElementRef, ViewChild,  } from '@angular/core';
import { NgClass } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `

        <!-- ViewChild and Template Reference Variables -->

  <div class="centered-page sm flex flex-col gap-3">

    <input type="text" (keydown.enter)="keydownHandler()" #input placeholder="URL">

    <button (click)="read()">READ VALUE</button>

  </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  @ViewChild('input') myInput: ElementRef<HTMLInputElement> | undefined; // riferimento #input
  /* @ViewChild è un decoratore che permette di accedere a un elemento html,
  in questo caso leggere il valore del campo di input, senza passare da una funzione */

  constructor(){
    setTimeout(() => {
      console.log(this.myInput?.nativeElement.value);
      this.myInput?.nativeElement.focus();
    }, 2000)
  }

  keydownHandler() {

    const text = this.myInput?.nativeElement.value; // event.target è un elemento html

    console.log(this.myInput?.nativeElement.value);
    if (text) {
      const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      const isUrlValid = urlRegex.test(text) // se text è definito(true) e la regex è valida

      if (isUrlValid) { // event.key è una stringa
        window.open(text);
      }
    }

  }

  read() {
    console.log(this.myInput?.nativeElement.value);
  }

}
