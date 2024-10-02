import { Component } from '@angular/core';
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

        <!-- Keyboard events -->

  <div class="centered-page sm flex flex-col gap-3">

    <input type="text" (keydown.enter)="keyboardHandler($event)" placeholder="URL">

  </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  keyboardHandler(event: Event) { // event: KeyboardEvent è un tipo di dato

    const text = (event.target as HTMLInputElement).value; // event.target è un elemento html
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isUrlValid = urlRegex.test(text)

    if (isUrlValid) { // event.key è una stringa

      window.open(text);
    }
  }

}
