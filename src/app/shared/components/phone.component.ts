import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  template: `

   <div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">
      <img [src]="url" [alt]="alt" class="w-full">
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class PhoneComponent {

  // proprietà personalizzabili per farlo bisogna decorare la proprietà con @Input() inportato da @angular/core

  @Input({ required: true }) url: string = ''; // valore di default stringa vuota
  @Input() alt: string = 'image'; // valore di default stringa 'image'

   /* Input required

   { required: true }

   decoratori @Input supportano alcune proprietà tra cui required a true
   che ci permettono di definire una proprietà come obbligatoria
   è avremo un eccezione in fase di compilazione quindi non potremo più utilizzare
   questo componente se non specifichiamo la proprietà url e veniamo subito bloccati
   da un errore di compilazione, quindi la proprietà è richiesta. */

}
