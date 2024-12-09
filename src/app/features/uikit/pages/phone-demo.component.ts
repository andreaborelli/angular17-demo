import { Component } from '@angular/core';
import { PhoneComponent } from '../../../shared/components/phone.component';

@Component({
  selector: 'app-phone-demo',
  standalone: true,
  imports: [
    PhoneComponent
  ],
  template: `
       <app-phone
        [src]="url"
        [alt]="alt"
        [showTitle]="true"
        size="xl"
      />

      <app-phone
        [src]="url"
        [alt]="alt"
        size="sm"
      />
  `,
  styles: ``
})
export default class PhoneDemoComponent {

  url = 'assets/images/pexels.png'
  alt = 'landscape'

}
