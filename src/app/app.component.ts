import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <button (click)="prev()">-</button> <!-- Class Methods -->
  <span>{{currentIndex}}</span>
  <button (click)="next()">+</button>
  `,
  styles: [],
})
export class AppComponent {


  currentIndex = 0;

  prev(){
    // this.currentIndex = this.currentIndex - 1
    // oppure
    --this.currentIndex
  }
  next(){
    // this.currentIndex = this.currentIndex + 1;
    // oppure
    ++this.currentIndex
  }

}


