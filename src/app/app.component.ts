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

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre  */
    .alert {
      padding: 20px;
      border: 4px solid black;
      border-radius: 20px;
  }
    .primary {
      background-color: blueviolet;
      color: white;
  }
    .danger {
      background-color: darkred;
      color: white;
  }
    .success {
      background-color: lightgreen;
      color: black;
  }
  `,
})
export class AppComponent {



}


