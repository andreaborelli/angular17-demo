import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  activatedRoute = inject(ActivatedRoute)
  productId: string | undefined;

  constructor() {
    console.log(this.activatedRoute.snapshot.params['productId'])

    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.productId = params['productId']
    })
  }
}
