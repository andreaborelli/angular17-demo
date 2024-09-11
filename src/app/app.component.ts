import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `

<div class="alert primary">
        message
    </div>

    <div class="alert danger">
        message
    </div>

    <div class="alert success">
        message
    </div>

  `,
  styleUrl: './app.component.css', /* styleUrl: singolo path no array*/
})
export class AppComponent {



}


