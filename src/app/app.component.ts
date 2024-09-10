import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <button (click)="currentIndex = currentIndex + 1">+</button> <!-- Events -->
  <span>{{currentIndex}}</span>
  <button (click)="currentIndex = currentIndex - 1">-</button>
  `,
  styles: [],
})
export class AppComponent {


  currentIndex = 0;

}


