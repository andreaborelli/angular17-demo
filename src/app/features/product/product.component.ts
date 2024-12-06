import { Component,  Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <p>
      id: {{productId}}
    </p>

    <button class="btn" routerLink="../1">1</button>
    <button class="btn" routerLink="/product/2">2</button>
    <button class="btn" routerLink="/product/3">3</button>
  `,
  styles: ``
})
export default class ProductComponent {

  @Input() productId: string | undefined;

}
