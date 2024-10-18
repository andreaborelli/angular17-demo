import { Component, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent
  ],
  template: `

    <!-- Angular Dev Tools - Components -->

 <button (click)="toggle()">toggle</button>

    @if(visible()) {
      <app-list />
    }

    <a href="https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh"
       target="_blank" rel="noopener noreferrer">Angular Dev Tools - Chrome Extension</a>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  visible = signal(false)

  toggle() {
    this.visible.update(v => !v)
  }


}

