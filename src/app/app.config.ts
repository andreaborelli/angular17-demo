import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions() ),
    provideHttpClient()
  ]
};

/* View Transition API

  l'attuale router nel momento in cui viene cambiata una pagina con un nuovo path,
  andrà a distruggere il componente attuale, e istanzia il nuovo componente.
  senza però dare il tempo di creare delle animazioni di chiusura o di apertura della nuova route.

  le più recenti verioni di Angular supportano anche le nuove View Transition API
  che attualmente nel funzionano su alcuni Browser, ma non su tutti.

  per bisogna andare nel file app.config.ts

  in provideRouter e aggiungere la funzione withViewTransitions()

  che in automatico avremmo una transizione Fade In e Fade Out tra le pagine e sottopagine.
  con navigazione più gradevole per gli utenti.

*/

/* withComponentInputBinding() semplifica accesso ai dati della route qui data: { title: 'Hello Demo 1'}
   idem in product.component.ts @Input() productId: string | undefined;
*/
