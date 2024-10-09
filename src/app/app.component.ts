import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';
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
export class AppComponent implements AfterViewInit {

  /* AfterViewInit: è un metodo che viene automaticamente invocato in ogni componente quando il template è pronto  */

  @ViewChild('input') myInput: ElementRef<HTMLInputElement> | undefined;

  // constructor(){
   //  setTimeout(() => {
   /* utlizzo di setTimeout perchè il campo di input non è disponibile ancora nel costruttore,
      ma deve aspettare un evento del ciclo di vita del componente, che indicherà che il template e renderizzato,
      e possiamo accedere in maniera sicura agli elementi della pagina*/
      //console.log(this.myInput);
    // })
 // }

  ngAfterViewInit() { // metodo che viene invocato automaticamente quando il template è pronto
    this.myInput?.nativeElement.value;
  }

  keydownHandler() {
    const text = this.myInput?.nativeElement.value; // event.target è un elemento html
    console.log(this.myInput?.nativeElement.value);
      // alternativa all'uso dell'if
    //const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    //const isUrlValid = text && urlRegex.test(text)
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
