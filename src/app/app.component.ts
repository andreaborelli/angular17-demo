import { Component, inject } from '@angular/core';
import { DropDownItem } from "./shared/components/dropdown.component";
import { SharedModule } from './shared/shared.module';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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

  <!-- Group Components -->

  <!-- navbar -->

    <app-navbar />

    <div class="max-w-screen-lg mx-3 lg:mx-auto">
      <router-outlet />
    </div>

  <div class="mx-6">

    <h1>Timeline</h1>

      <app-timeline [items]="timeLineList"/>
        <!-- [items]="timeLineList" passiamo la proprietà items,
         parentesi quadre perchè passiamo un'espressione
         con il valore timeLineList -->
      <app-timeline [items]="timeLineList" vertical/>

    <h1>Alert</h1>

      <app-alert
        (onCancel)="cancel()"
        (onConfirm)="approve()"
        denyLabel="Cancel"
        acceptLabel="Confirm"
        variant="success"
      >
        this is a message
      </app-alert>

      <br>

      <app-alert
        (onCancel)="doSomethingAlert()"
        (onConfirm)="doSomethingElse()"
        variant="error"
      >
        <div class="flex flex-col gap-5">
          <em>this is messagge alert</em>
          <strong>this is messagge strong</strong>
          <input type="text" class="input input-bordered">
        </div>
      </app-alert>

      <div class="flex flex-col gap-4 m-4" >
        <app-alert>msg</app-alert>
        <app-alert variant="info">msg</app-alert>
        <app-alert variant="success">msg</app-alert>
        <app-alert variant="error">msg</app-alert>
      </div>

    <h1>Dropdown</h1>

      <app-dropdown
          [items]="list"
          (select)="doSomethingItem($event)"
      >BOTTOM</app-dropdown>

      <app-dropdown [items]="list" palcenment='right' >RIGHT</app-dropdown>
      <app-dropdown [items]="list" placement="top">TOP</app-dropdown>
      <app-dropdown [items]="list" placement="left">LEFT</app-dropdown>
      <app-dropdown [items]="list" placement="left" hover>OVER</app-dropdown>

    <h1>Accordion</h1>
      <app-accordion-item title="one" selected>
        lorem ipsum
      </app-accordion-item>

      <app-accordion-item title="two">
        <em>lorem ipsum</em>
      </app-accordion-item>

      <app-accordion-item title="three">
        <button class="btn btn-info" (click)="doSomething()">Click Me</button>
      </app-accordion-item>

      <br>

      <app-accordion-item groupName="another" title="one" selected>
        lorem ipsum
      </app-accordion-item>

      <app-accordion-item groupName="another" title="two">
        <em>lorem ipsum</em>
      </app-accordion-item>

      <app-accordion-item groupName="another" title="three">
       <button class="btn btn-info" (click)="doSomething()">Click Me</button>
      </app-accordion-item>

      <h1>Phone</h1>
          <app-phone
            [src]="url"
            [alt]="alt"
            [showTitle]="true"
            size="xl"
          />

  </div>
  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
      h1 {
      @apply text-3xl text-center py-2 my-4 border-t border-dashed border-slate-500
    }
  `,
})
export class AppComponent {

  /*
    Il router offre una serie di classi,
    chiamati servizi, che ci offrono la
    possibilità di avere diverse informazioni
    sul router e diversi utility, ad esempio
    possiamo sapere qul'è la route corrente,
    rimane in ascolto degli eventi del router,
    effettuare un redirect ad una pagina
    non dal template ma via JavaScript ecc.

    Per iniettare un servizio possiamo usare
    il costruttore del componente in cui definiamo
    il nome della variabile che conterrà la reference
    all'istanza del servizio che stiamo iniettando
    e con due punti definiamo il nome del servizio
    che stiamo iniettando, in questo caso Router
    con l'importazione di Router dal package @angular/router

   non dovremmo fare un new router, non dovremmo creare
   una nuova istanza manualmente ma dovremo semplicemente
   iniettare l'istanza che il router ha già creato per noi,
   c'è la rende globalmente, è la stiamo iniettando:
   (router: Router)
   cambio di url via JavaScript: router.navigateByUrl

  al refresh della pagina, cambio di url, cioè cambio pagina:

     setTimeout(() => {
       router.navigateByUrl('demo1');
    }, 4000);

  Oppure possiamo rimanere in ascolto degli eventi del router
  roter.events, che ci fornisce un observable,
  da immaginare come uno stream di dati che possiamo
  sottoscrivere, quando cambiamo pagina il router emette
  in questo stream di dat, cioè nel observable, un evento.
  lo sottoscriviamo rimaniamo in ascolto,
  riceviamo l'evento facendo un console.log.

  le fasi del router sono diverse,
  per ogni cambio di router parte da un navigation start
  con diverse fasi del router e arriviamo fino a navigation end
  stessa cosa quando cambiamo route.

  per sapere qual'è la route corrente es.
  voler tracciare il cambio router con google analitics
  o avviare qualche azione sul server ecc.

  ogni volta che la route viene cambiata

    router.events.subscribe(event => {
  if( event instanceof NavigationEnd) { //è una guardia per sapere se l'evento è di tipo NavigationEnd
    console.log('event', event);
  }
  */

  /*
    Un'altra tecnica per iniettare un servizio disponibile da
    Angular 15 in poi è quella di usare invece la funzione inject
    creiamo una proprietà della classe chiamata router
    usiamo la funzione inject importata da @angular/core
    è definiamo quale servizio iniettare all'interno del nostro componente
    l'unica differenza è che nel costruttore non avremo accesso
    direttamente alla proprietà router ma a this.router
    visto che è diventata una proprietà della classe es. AppComponent

    è molto comodo perchè quando creeremo altri metodi nel componente
    potremmo accedere direttamente alla proprietà router con this.router.
  */

  router = inject(Router)

  constructor() {
      this.router.events.subscribe(event => {
        if( event instanceof NavigationEnd) { //è una guardia per sapere se l'evento è di tipo NavigationEnd
          console.log(event.url);
        }
      });
  }

  url = 'assets/images/pexels.png'
  alt = 'landscape'

  list = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: "something"},
  ]

  timeLineList = [
    { start: '2014', end: 'description'},
    { start: '2015', end: 'description'},
    { start: '2018', end: 'lorem...' },
    { start: '2022', end: 'bla bla' },
    { start: '2023', end: 'hello' },
  ]

  doSomethingItem(event: DropDownItem) {
    console.log('do Something', event);
  }

  doSomething() {
    window.alert('hello');
  }

// Alert Component
  approve() {
    window.alert('Approved');
  }

  cancel() {
    window.alert('Denied');
  }

  doSomethingAlert() {
    console.log('doSomethingAlert');
  }

  doSomethingElse() {
    console.log('doSomethingElse');
  }

}

