import { UpperCasePipe } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [

  ],
  template: `

  <!-- Input Transform numberAttribute -->

   <div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">
      <img
      [src]="url"
      [alt]="alt"
      [style.width.%]="size"
      >
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

      <!-- l'immagine ha una width del 100% settata con la classe w-full di Tailwind
       la width si può anche personalizzare applicando classi Tailwind differenti
       oppure usando anche style="width: 100%" oppure 50% per vederla a metà,
       possiamo anche passare dinamicamente questo valore con [style.width]="25%"
       o il suffix operator che ci permette di specificare un number invece come valore
       dell'attributo width, ma l'unità di misura la specifichiamo con width .px, .% .rem e così via,
       in questo caso possiamo passare un number.
       useremo questa strategia per fare in modo che quel valore sia passato dall'esterno tramite
       una proprietà in input che chiameremo size, quindi applicheremo alla width la proprietà size:
        [style.width.%]="size"
        creando la proprietà con un valore di default es. di 75
        la decoriamo con il decoratore @Input() e assegniamo un valore di default di 100
        ma dall'esterno possiamo attribuire il valore es. 25 con le parentesi quadre
        (senza quadre sarebbe trattato come stringa, quindi non è un number perchè size
        nel componente è stato inizializzato con 100 che è appunto un number
        e quindi viene trattato come tale type number):
          <app-phone
            [url]="url"
            [alt]="alt"
            [showTitle]="true"
            [size]="25"
            />

          Con TRANSFORM NUMBER ATTRIBUTE è possibile invece andare a passare un valore ARCODED
          senza quadre: size="25"

             <app-phone
               [url]="url"
               [alt]="alt"
               [showTitle]="true"
               size="25"
                />

          anche come stringa ma verrà sempre trattato come NUMBER anche senza l'utilizzo delle quadre.
       -->

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


  @Input({ transform: (val: 'sm' | 'md' | 'xl' ) => {
    switch (val) {
      case 'sm': return 50;
      case 'md': return 75;
      default:
      case 'xl': return 100;
    }
    //console.log('val', val);
    //return val === 'sm' ? 50 : 100;
    // se il valore è sm allora la larghezza è 50, altrimenti 100
  }})
  size = 100; // valore di default 100


   /* usiamo la funzione di trasformazione transform: è riceviamo il valore che sarà una stringa sm o xl
   ed effettuiamo una conversione, usiamo un ternario, perchè abbiamo solo 2 circostanze e se ne
   avessimo 3,4, n casi da gestire useremo uno switch case , una dictionary o altre strategie.
   */

}
