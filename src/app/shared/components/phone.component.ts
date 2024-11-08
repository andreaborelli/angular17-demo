import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [

  ],
  template: `

   <div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">
      <img [src]="url" [alt]="alt" class="w-full">
      {{ alt }}
    </div>
  </div>
</div>
  `,
  styles: ``
})
export class PhoneComponent {

  // proprietà personalizzabili per farlo bisogna decorare la proprietà con @Input() inportato da @angular/core

  @Input({ required: true }) url: string = ''; // valore di default stringa vuota
  @Input({ transform: (val: string) => {
    return val.toUpperCase();
  } }) alt: string = 'image'; // valore di default stringa 'image'


   /* Input required

   { required: true }

   decoratori @Input supportano alcune proprietà tra cui required a true
   che ci permettono di definire una proprietà come obbligatoria
   è avremo un eccezione in fase di compilazione quindi non potremo più utilizzare
   questo componente se non specifichiamo la proprietà url e veniamo subito bloccati
   da un errore di compilazione, quindi la proprietà è richiesta. */

   /* immaginiamo di voler renderizzare il testo alt in uppercase
   a prescindere di come lo passiamo, quindi sempre in maiuscolo
   potremmo usare il pipe uppercase alt | uppercase importandolo in import: UpperCasePipe
   oppure se volessimo fare una personalizzazione non prevista dalle pipe di default è quindi
   potremmo es. avere anche una procedura che calcola l'output sulla base di determinate condizioni
   proprietà, variabili oppure potremmo voler formattare la stringa in altro modo o qualunque altra
   operazione di trasformazione.
   Possiamo usare la proprietà transform del decoratore @Input nel quale possiamo specificare una funzione
   che riceve il valore passato in input:  (val: string)  e può manipolarlo con es return prima di renderizzarlo nel template,
   quindi ogni volta che passiamo una stringa alt es. concatenazione coè il concat di una stringa:  return val + val;
   possiamo passare la parola es:  return 'foo'; oppure return val.toUpperCase();
   o qualunque altra operazione vogliamo effettuare come trasformazione.
   Interessante se passiamo un componente es. se passiamo un array di dati, o un oggetto
   cosa che possiamo fare tramite le proprietà in input, potremmo passare un array di number
   e trasformare in un array di string, o un array di prodotti e filtrarlo e cosi via...   */

}
