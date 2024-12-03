import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  template: `
  <!--
  invece di routerLink potremmo utilizzare anche un a con href
   che reindirizza l'utente es. su demo1
   ma  con a href avremmo un refresh della pagina.
   routerLink invece cambia l'url, il router va a verificare se l'url
   combacia con una delle regole impostate e carica il componente
   specifico dentro router outlet distruggendo, ovviamente,
   il precedente che non serve più.
   -->
   <!-- routerLinkActive è un'altra direttiva che ci permette
    di specificare quale classe CSS applicare nel momento in cui
    il path meccia(matcha) con quello specificato in router link
    routerLinkActive="text-sky-400"
     -->
     <div class="navbar bg-base-100">
          <div class="flex-1">
              <a class="btn btn-ghost text-xl">Angular Training</a>
          </div>
          <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                  <li routerLink="demo1" routerLinkActive="text-sky-400"><a>Demo 1</a></li>
                  <li routerLink="demo2" routerLinkActive="text-sky-400"><a>Demo 2</a></li>
                  <li routerLink="demo3" routerLinkActive="text-sky-400"><a>Demo 3</a></li>

              </ul>
          </div>
      </div>

  `,
  styles: ``
})
export class NavbarComponent {

}
