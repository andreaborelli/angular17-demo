import { Component } from '@angular/core';

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


  url = 'assets/images/pexels.png';
  alt = 'landscape';

}
