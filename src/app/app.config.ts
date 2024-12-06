import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding() ),
    provideHttpClient()
  ]
};

/* withComponentInputBinding() semplifica accesso ai dati della route qui data: { title: 'Hello Demo 1'}
   idem in product.component.ts @Input() productId: string | undefined;
*/
