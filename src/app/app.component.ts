import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    NavbarComponent

],
  template: `

  <!-- navbar -->

    <app-navbar />

    <div class="max-w-screen-lg mx-3 lg:mx-auto">
      <router-outlet />
    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
      h1 {
      @apply text-3xl text-center py-2 my-4 border-t border-dashed border-slate-500
    }
  `,
})
export class AppComponent {


}

