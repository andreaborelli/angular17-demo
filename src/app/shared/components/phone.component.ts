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


  @Input() url: string = ''; // valore di default stringa vuota
  @Input() alt: string = 'image'; // valore di default stringa 'image'



}
