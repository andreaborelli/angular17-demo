import { UpperCasePipe } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [

  ],
  template: `

  <!-- Input Transform booleanAttribute -->

   <div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">
      <img [src]="url" [alt]="alt" class="w-full">
      @if (showTitle) {
        <div>{{ alt }}</div>
      }

    </div>
  </div>
  <!-- Per rendere il titolo opzionale con un attributo in Input showTitle che di default è false,
   quindi vogliamo che il testo sia nascosto di default, a meno che l'utente non lo specifichi con un true
   che lo vuole visualizzare.
   Facciamo quindi in modo che il title non venga renderizzato con il blocco @if
   tuttavia essendo una proprietà in Input, possiamo eventualmente passarlo dall'esterno ne componente -->
</div>
  `,
  styles: ``
})
export class PhoneComponent {

  // proprietà personalizzabili per farlo bisogna decorare la proprietà con @Input() inportato da @angular/core

  @Input({ required: true })
  url: string = ''; // valore di default stringa vuota

  @Input({ transform: (val: string) => {
    return val.toUpperCase();
  } })

  alt: string = 'image'; // valore di default stringa 'image'

  @Input({ transform: booleanAttribute })
  showTitle = false; // valore di default true


      /* Una nuova feature introdotta da Angular 16 in poi, è la possibilità di avere un transform booleanAttribute
        questo attributo fa si che sia possibile passare un booleano true hardcoded senza la necessità
        di specificare le quadre, E neppure di indicare il boolean true, molto utile e presente
        anche in altri framework JSX come sistema di template.
        che */

}
