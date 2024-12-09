import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component'),
    data: { title: 'Hello Demo 1'}
  },
  { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component') },
  { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },

  {
    path: 'uikit',
    loadComponent: () => import('./features/uikit/uikit.component'),

    children: [
      { path: 'accordion', loadComponent: () => import('./features/uikit/pages/accordion-demo.component') },
      { path: 'alert', loadComponent: () => import('./features/uikit/pages/alert-demo.component') },
      { path: 'dropdown', loadComponent: () => import('./features/uikit/pages/dropdown-demo.component') },
      { path: 'phone', loadComponent: () => import('./features/uikit/pages/phone-demo.component') },
      { path: 'timeline', loadComponent: () => import('./features/uikit/pages/timeline-demo.component') },
      { path: 'variant-icon', loadComponent: () => import('./features/uikit/pages/variant-icon-demo.component') },
      { path: '', redirectTo: 'accordion', pathMatch: 'full' }
    ]
  },
  { path: 'product/:productId', loadComponent: () => import('./features/product/product.component') },
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];


/*
 creare una root che a sua volta ha dei sottolivelli di root secondarie,
 in pagina UIKit che contiene delle sottopagine, una per ogni componente che utilizziamo
 quindi uno showcase dei nostri componenti
 quindi avremo in UIKit con al suo interno un menù con i pulsanti per visualizzare
 la pagina interna Accordion ecc..
 è con gli URL //UIKit//Accordion//UIKit//Alert
 Dropwdown, Prone e tutte le altre pagine, e sarà anche possibile accedervi direttamente URL.
*/

/*
  affinché un root possa avere dei figli, quindi UiKit/accordion ecc..
  dobbiamo aggiungere la proprietà children (interno del root principale)
  alla nostra root e definire all'interno delle nuove root per delle nuove pagine.
  Non caricaremmo direttamente i componenti come root ma creeremo delle pagine demo
  in cui andare a istanziare i vari componenti, quindi avremo accordion-demo, dropdown-demo ecc..
  dentro la cartella pages con le nuove pagine.
*/

/*
  Quando una root contiene la proprietà children al suo interno significa che
  quel componente potrà avere un suo router outlet interno, quindi un <router-outlet></router-outlet>
*/

/*
  con routerLink con il nome senza lo slash iniziale non prtiamo dalla root
  ma sostituiamo l'ultimo segmento, quindi es. ci troviamo su /uikit viene aggiunto es. /uikit/accordion
  gestire anche la stringa vuota:
  { path: '', redirectTo: 'accordion', pathMatch: 'full' }
*/

