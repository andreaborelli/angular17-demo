import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component'),
    data: { title: 'Hello Demo 1'}
  },
  { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component'),},
  { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },

  {
    path: 'uikit',
    canActivate: [authGuard],
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
  Per proteggere l'accesso ad una root sulla base di una condizione,
  ovvero accedo in una pagina con un URL, ma NON vogliamo dare permesso all'utente di
  accedervi se NON sulla base di una condizione che può essere un token che
  abbiamo salvato, una proprietà nel localStorage, una chiamata al server ecc..
  bisogna usare il concetto di router guard, una guardia del router.
  con la proprietà canActivate possiamo definire un array di guardie,

  MENTRE ALCUNE VERSIONI FA DI ANGULAR RICHIEDEVANO UNA ROUTER GUARD SCRITTA CON UNA CLASSE,

  ora possiamo semplicemente definire una funzione al suo interno e questa funzione
  può restituire per es. true o false, un booleano.

      canActivate: [function() {
       return false;
    }],

    se restituiamo false la root no sarà accessibile, infatti es. in demo2 in contenuto non sarà caricato
    se mettiamo true la root sarà accessibile.

    questa fuozione può essere scritta in arrow sintax,

    canActivate: [() => {
      return false;
    }],

    ma il return può dipendere da vari fattori, potremmo fare una chiamata ala server,
    potremmo avere un valore su localStorage, cookie, oppure recuperare lo stato
    di authenticazione di sdk, possiamo fare qualunque genere di controllo,
    potremmo anche iniettare un servizio esterno. potremmo recuperare il valore
    di login se siamo loggati o meno, o altre informazioni.

    es. simulazione stato di logincon proprietà isLogged che ovviamente dovrà
    essere recuperata da qualche altra fonte, dal localstorage ai cookie, o sdk ecc..
    che può essere true o false, quindi es:

         canActivate: [() => {
      const isLogged = false;
      return isLogged;
    }],
    ma vengo stoppato, quindi la mia view non viene visualizzata, non viene reindirizzato
    da nessuna parte, semplicemente non mi permette di caricare il contenuto della view.

    quindi all'interno della funzione iniettiamo il router, e se non siamo loggati facciamo
    un navigateByUrl('demo1') è lo rimandiamo a es. demo1, quindi nel momento in cui accediamo
    a direttamente a demo2 verremo indeirizzati automaticamente a demo1.

    Comunque è importante che la guardia vada sempre a restituire un booleano o
    un observable di booleano.

    la guardia si potrebbe anche riutilizzare, quindi megliocreare un file auth.guard.ts
    è la esportiamo:

    export const authGuard = () => {
       const router = inject(Router)
       const isLogged = true;
        if (!isLogged) {
        router.navigateByUrl('demo1')
         }
         return isLogged
      }

  canActivate: [AuthGuard], supporta un array di guardie, quindi possiamo avere più guardie
  una per lo stato di autenticazione, una per i ruoli utente,
  un'altra che visualizza il contenuto sulla base del fatto, che uno stia pagando un piano
  es. professional, premium, o free, che è sempre una gestione di ruoli ecc..

  è nel path che definiamo la guardia inseriamo

    canActivate: [AuthGuard],

*/

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

