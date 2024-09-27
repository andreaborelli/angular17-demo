import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgStyle
  ],
  template: `

<!-- dynamic class -->
  <div
    class="alert"
    [ngStyle]="styles"

    >
        {{text}}

  <!-- con la direttiva ngStyle applichiamo un oggetto di proprietà CSS direttamente ad un elemento del template,
   richiede anche di essere importata dal pacchetto angular common: import { NgStyle } from '@angular/common';
 e inserita tra gli import del componente affinchè possa essere utlilizzata -->

<!-- inline-style classi CSS in in line in modo dinamico, flessibile -->

  </div>

  <!-- styles è il valore della direttiva ngStyle -->

  <button (click)="styles = { backgroundColor: 'cyan', color: 'black',fontSize: '10px' }">Primary</button>
  <button (click)="styles = { backgroundColor: 'red', color: 'white', fontSize: '20px' }">Danger</button>
  <button (click)="styles = { backgroundColor: 'green', color: 'white', fontSize: '30px' }">Success</button>

<!-- una soluzione alternativa che invoca una funzione:

 [ngStyle]="getStyles()"

invece di impostare una proprietà:

 <div
      class="alert"
      [ngStyle]="getStyles()"
    >
        {{ alert.msg }}
    </div>

    <button (click)="alert = {msg: 'hello 1', type: 'primary'}">primary</button>
    <button (click)="alert = {msg: 'hello 2', type: 'danger'}">danger</button>
    <button (click)="alert = {msg: 'hello 3', type: 'success'}">success</button>

 -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
    .alert {
      padding: 20px;
      border: 4px solid black;
      border-radius: 20px;
  }
  `,
})
export class AppComponent {

  // alert = 'success';
  // msg = 'hello alert!';

  // oggetto alert
  styles = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '100px'
  }
  text = "Hello CSS";



 /* una soluzione alternativa che invoca una funzione:

  [ngStyle]="getStyles()"

 invece di impostare una proprietà:

   alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }

  getStyles() {
    switch (this.alert.type) {
      case 'danger': return { backgroundColor: 'darkred', text: 'white' }
      case 'success': return { backgroundColor: 'lightgreen', text: 'black' }
      default:
        return  { backgroundColor: 'blueviolet', text: 'white' }
    }
  }
 */

}
