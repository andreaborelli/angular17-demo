import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule // CommonModule è un modulo che contiene le direttive di base di Angular, come *ngIf, *ngFor, ecc.
  ],
  template: `

    <!-- come creare una nimi gallery di immagini -->

      <div class="centered-page sm flex flex-col gap-3 items-center">
          <h1 class="text-3xl">{{ product.name }} {{ product.images[currentIndex].label }}</h1>

        <div class="flex gap-3 items-center w-full">

          <button class="btn" (click)="prev()">prev</button>
            <img
              [src]="product.images[currentIndex].path"
              [alt]="product.images[currentIndex].label"
              class="w-64"
              >
          <button class="btn" (click)="next()">next</button>

        </div>

          <div>{{ product.website }}</div>

      </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  currentIndex = 0;

  product = {
    name: "T-Shirt",
    images: [
      { path: "assets/images/angular.png", label: "Angular" },
      { path: "assets/images/react.png", label: "React" },
      { path: "assets/images/js.png", label: "JS" }
    ],
    website: "https://www.fabiobiondi.dev",
  }

  prev() {
    this.currentIndex = this.currentIndex > 0 ?
      this.currentIndex - 1 : this.product.images.length - 1; // se currentIndex è maggiore di 0 allora decrementa altrimenti assegna la lunghezza dell'array - 1

  }
  next() {
    this.currentIndex = this.currentIndex < this.product.images.length - 1 ?
      this.currentIndex + 1 : 0; // se currentIndex è minore della lunghezza dell'array - 1 allora incrementa altrimenti assegna 0

  }

}


