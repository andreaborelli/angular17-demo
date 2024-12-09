import { Component } from '@angular/core';
import { VariantIconComponent } from '../../../shared/components/variant-icon.component';

@Component({
  selector: 'app-variant-icon-demo',
  standalone: true,
  imports: [
    VariantIconComponent
  ],
  template: `
    <app-variant-icon />
    <app-variant-icon variant="info" />
    <app-variant-icon variant="success" />
    <app-variant-icon variant="error" />
  `,
  styles: ``
})
export default class VariantIconDemoComponent {

}
