import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component') },
  { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component') },
  { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

  /*
    da Angular 15 in su è possibile rimuovere il:
    .then(c => c.Demo1Component)
    è per far saper al loadComponent quale file caricare
    bisogna esportare il componente come default:

      export default class Demo1Component {

      }
    così facendo non è più necessario specificare appunto tramite la promise.
    così le regole di router sono meno verbose.
  */

  /* pathMatch: definisce la strategia di matching (maccing)
  tra url e il path.
  con pacthMatch: 'prefix' significa che il router verifica solo che la rout comincia
  es. con demo1, demo2 con un determinato path,
  mentre con pathMatch: 'full' significa che deve essere esattamente
  quella stringa vuota path: '',
  */

  /*
  Quando definiamo le regole del router e decidiamo che ad uno specifico path sia
  caricato uno specifico component con:
    component: Demo1Component
  stiamo definendo il componente da caricare importandolo con l'import:
  import { Demo1Component } from './features/demo1/demo1.component';
  quando un componente viene importato é utilizzato all'interno della nostra applicazione
  verrà inserito nel bundle quindi nel file che verrà poi generato per la build finale da pubblicare.
  per es. un server dove poi vorremmo visualizzare.
  */

  /*
    in Angular abbiamo due tipi di compilazioni differenti

    una in fase di sviluppo che non ottimizza il bundle
    e l'altra invece nella build finale dove il bundle è minificato, ottimizzato
    e ha tutto quello che serve per performare meglio.

    */

    /*
    Se apriamo i developer tools del browser e andiamo nella sezione network
    e nel tab JS possiamo veddremo che in fase di sviluppo abbiamo una serie di file
    e in questi file a prescindere a cosa contengono all'interno troveremo i componenti,
    vuol dire che quando avviamo l'applicazione questi componenti saranno già caricati
    e significa, anche che più grandi saranno i componenti, più pagine aggiungo
    più il caricamento iniziale sarà lento, perchè ovviamente dovremmo caricare un
    numero maggiore di righe di codice javascript ed eventualmente di CSS
    se però apro un nuovo termilale e lancio il comando npm run build
    vedremo che nella build i file che realmente verranno pubblicati saranno
    un file main, un file di style CSS e polifill che è un file che serve per
    retrocompatibilità, necessario ad Angular per poter funzionare correttamente
    su alcuni browser.
    */

    /*
    la tecnica chiamata lazy loading ci permette di caricare i componenti
    solo quando necessario, solo quando visiteremo es. demo2 sarà caricato
    quel pezzetto di JavaScript che serve per visualizzare il componente
    e necessario per farlo funzionare, per applicare questa tecnica dobbiamo
    usare l'opzione loadComponent che tramite una sintassi chiamata dynamic import
    ci permette di definire il path, il percorso al componente es. demo1
    ./features/demo1/demo1.component esattamente il path al file del componente
    ma avremmo un errore, il motivo è che stiamo decidendo di caricare al path demo1
    un determinato file typescript che è demo1.component.ts,
    questo file typescript potrebbe contenere degli altri componenti, classi, funzioni ecc.
    ed essendo caricato con il lazyloading richiede un determinato tempo,
    che dynamic import ci restituisce una promise, è dobbiamo poi risolvere questa promise,
    e decidere dal file che ci restituisce di caricare il componente che ci interessa.

    .then(file => file.Demo1Component)

      { path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component').then(c => c.Demo1Component) },

    è buona pratica per ogni file avere sempre solo un componente.

    questo meccanismo è ottimizzato rispetto al precedente perchè possiamo
    rimuovere gli import e il compilatore di angular non troverà
    ne più gli import ne l'utilizzo dei componenti importati
    quindi li escluderà automaticamente dal bundle che sarà più leggero.

    Dopodichè se rifacciamo la buil possiamo notare che nella colonna
    Raw size avremo una diminuzione del numero dei kB nei file:

    DA:

        Initial chunk files   | Names         |  Raw size | Estimated transfer size
        main-TGOKCQ6A.js      | main          | 226.42 kB |                61.13 kB
        styles-6APIBJUR.css   | styles        |  52.51 kB |                 7.77 kB
        polyfills-SCHOHYNV.js | polyfills     |  33.72 kB |                11.03 kB

    A:

        Initial chunk files   | Names           |  Raw size | Estimated transfer size
        main-HMFN2SZ7.js      | main            | 114.13 kB |                28.82 kB
        chunk-6OLVYGON.js     | -               | 113.36 kB |                34.00 kB
        styles-TFVE54LV.css   | styles          |  54.21 kB |                 8.12 kB
        polyfills-SCHOHYNV.js | polyfills       |  33.72 kB |                11.03 kB

                              | Initial total   | 315.43 kB |                81.96 kB

        Lazy chunk files      | Names           |  Raw size | Estimated transfer size
        chunk-4QXAV73R.js     | demo1-component | 350 bytes |               350 bytes
        chunk-XCXX72O7.js     | demo2-component | 350 bytes |               350 bytes
        chunk-KQYLYI6T.js     | demo3-component | 350 bytes |               350 bytes

    è una serie di file javascript chiamati chunk che rappresentano le varie pagine
    e sono appunto in diversi javascript separati.
    L'aspetto interessante è che es. cliccando sui vari pulsanti demo1, demo2, demo3
    verranno caricati on demand, es. se refreshio l'applicazione e vado sul primo chunk
    vediamo che questo rappresenta demo1-component, e cosi via...

    quindi il main è totalmente svuotato dal contenuto di quelle pagine abbiamo più
    che dimezzato la dimensione rispetto al Kb iniziali
    e quando publicheremo la build, quindi pubblicheremo tutti questi file ne avremo
    qualcuno in più alleggerendo però notevolmente il bootstrap, quindi l'avvio dell'applicazione
    caricando i vari chunk quando necessario ovvero al click delle click delle varie pagine.

    In realtà il meccanismo che regola la gestione dei chunk ed lazy loading è molto più complesso
    dietro le quinte se notate in main è di 83kb, ma in realtà è stato creato un chunk di 99kB
    che sommandoli diventa 183kB di prima.

    I chunk delle pagine demo 1,2,3, invece pesano pochi byte, il motivo è che le pagine utilizzano dei
    componenti condivisi dello shared module e quel chunk rappresenta sostanzialmente
    quello che è contenuto nello shared module.

    In breve il lazy loading ci permette di caricare solo il necessario e di alleggerire il bundle.

    */
