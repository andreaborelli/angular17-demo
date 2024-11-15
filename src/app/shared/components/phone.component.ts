import { UpperCasePipe } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [

  ],
  template: `

  <!-- Input Alias -->

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

  <!--
  Immaginiamo di voler cambiare il nome dell'attributo url a image oppure src e
   di non voler cambiare però all'interno tutti riferimenti che abbiamo a url
   un'altro motivo potrebbe essere che internamente voglio usare url come nome ma
   esternamente come attributo preferisco usare src.
   è possibile definire degli alias ovvero nell'attributo input sempre nell'oggetto
   possiamo passare alias src @Input({ alias: 'src', required: true })
   e ora all'interno della classe potremmo utilizzare gli url:

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
    in ts: url: string = ''; // valore di default stringa vuota

      ma dall'esterno utilizzaremo src:

      <app-phone
       [src]="url"
       [alt]="alt"
       [showTitle]="true"
       size="sm"
      />
    -->

</div>
  `,
  styles: ``
})
export class PhoneComponent {

  // proprietà personalizzabili per farlo bisogna decorare la proprietà con @Input() inportato da @angular/core

  @Input({ alias: 'src', required: true })
  url: string = ''; // valore di default stringa vuota

  @Input({ transform: (val: string) => {
    return val.toUpperCase();
  } })

  alt: string = 'image'; // valore di default stringa 'image'

  @Input({ transform: booleanAttribute })
  showTitle = false; // valore di default true


  @Input({ transform: (val: 'sm' | 'md' | 'xl' ) => {
    switch (val) {
      case 'sm': return 50;
      case 'md': return 75;
      default:
      case 'xl': return 100;
    }

  }})
  size = 100; // valore di default 100


}
