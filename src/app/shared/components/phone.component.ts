import { UpperCasePipe } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  templateUrl: './phone.component.html',
 // template: `in line template`, proprieta del decoratore @Component - meno file
// External Templates
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
