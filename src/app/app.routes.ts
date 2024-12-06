import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component'),
    data: { title: 'Hello Demo 1'}
  },
  { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component') },
  { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },
  { path: 'product', redirectTo: 'product/1', pathMatch: 'full' },
  { path: 'product/:productId', loadComponent: () => import('./features/product/product.component') },
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

  /*
  Una root può anche ricevere dei parametri dall'url es
  se accediamo dall'url http://localhost:4200/product/qualunquevalore
  riceveremmo un errore perchè il path è /product/ non /product/qualunquevalore
  perchè quel path non esiste, ma per risolvere bisogna aggiungere al path:
    path: 'product/productId',

    per recuperare dalla pagina il productId bisogna iniettare

     activateRoute = inject(ActivatedRoute);

     con shapshot.params['productId'] possiamo recuperare il valore
  */

  /*
  Tramite le regole del router è possibile passare ad una root,
  es. demo1 dei dati es. la proprietà data: { title: 'Hello Demo 1' }
  che possono essere visualizzati nel componente demo1.component.ts
  per farlo bisogna inanzitutto iniettare nel costruttore il servizio
  ActivatedRoute importato da @angular/router
  poi facciamo un print con:
  console.log(this.activateRoute);
  andaondo in console del browser vedremo che ci restituirà un oggetto
  con tante proprietà, le quali è possibile accedere, al titolo delaa pagina, ai parametri ecc.
  molti di questi oggetti sono dei BehaviorSubject, quindi dei observable, quindi stream di dati
  che possiamo sottoscrivere con subscribe.

  il mondo reattivo degli observable è gestito da RxJS che è una dipendenza del faramework Angular
  è molti dei costrutti e delle funzionalità di Angular dipendono da RxJS.

  dopodicè abbiamo anche un oggetto snapshot che è un oggetto che contiene diverse informazioni
  tra cui la proprietà data che contiene il titolo con Hello Demo 1.

  per accedere al titolo bisogna fare:

  this.activateRoute.snapshot.data['title']

  il title con parentesi quadre perchè typescript non è in grado di rilevare .title
  visto che è stato aggiunto un path nella route ed Angular non riesce a tipizzare questo parametro.
*/
