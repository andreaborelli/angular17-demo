import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  template: `

  <!-- proprietà in Input ad un componente, è le abbiamo utilizzato all'interno del template  -->

<!-- alle volte potremmo avere la necessità di
 effettuare un operazione quando una proprietà di Input è disponibile quindi quando passiamo una proprietà in Input,
 immaginiamo di voler fare una chiamata al server quando il componente riceve es. id dell'utente    -->

    <p>
      user-profile works!
    </p>
  `,
  styles: ``
})
export class UserProfileComponent implements OnInit, OnDestroy {
  @Input() id: number | undefined;
  timer: ReturnType<typeof setInterval>;

  constructor() {
    console.log('constructor', this.id)

    this.timer = setInterval(() => {
      console.log('timer')
    }, 1000)
  }

  ngOnInit() {
    console.log('ngOnInit', this.id)
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }



  /* ngOnInit */

  /* immaginiamo se volessimo fare una chiamata al server quando l'id è disponibile
  non potremmo farlo nel costruttore facendo un print ad es. console.log(this.id) sarà undefined
   il costruttore è invocato troppo presto rispetto a quando sono disponibili le proprietà in input

   è per questo motivo esiste un metodo del life cycle (ciclo di vita)
   che possiamo implementare attraverso un interfaccia OnInit con implements OnInit
   è ci richiede che venga definito un metodo ngOnInit all'interno

   in realtà verrà automaticamente invocato ngOnInit quqndo la proprieta in input è disponibile
   e potremma potenzialmente fare operazioni es. una get per recuperare i dati dell'utente

   ngOnInit non aspetta che la proprietà in input id sia valorizzata,
   perchè se dal parent avessi passato una proprietà id dinamicamente es. [id]="value"
   questo value potenzialmente potrebbe essere popolato da una chiamata al server
   la prima volta che il template renderizza è value non è ancora popolato arriverà undefined al componente figlio
   è sia nel costruttore che nel ngOnInit arriverà undefined
   quindi dovremmo aspettare il giro successivo quando il valore viene popolato ed eventualmente riceverlo. con ngOnChange */


   /* ngOnDestroy */

    /* ngOnDestroy è un metodo del ciclo di vita che viene invocato quando il componente viene distrutto
    infatti ci sarà utile per distruggere qualcosa quando il componente viene distrutto
    es. con set interval:

    constructor(){
       //  console.log(this.id);

          setInterval(() => {
              console.log('setInterval');
          }, 1000);
        }
  che visualizza ogni secondo un messaggio un console.log timer

  se il componente fosse distrutto per vari motivi es. cambio di pagina, cambio di rotta, root
  o es. creaiamo una proprietà visible con un pulsante che fa il toggle,

  <button (click)="visible = !visible">
  Toggle
 </button>

  con sopra un @if
    @if(visible){
    <app-user-profile [id]="1"/>
  }
  che crea o distrugge il componente user-profile, vedremo che se la proprietà visible e true

    visible = true;

    il componente viene visualizzato e parte il timer al click su toggle il componente viene distrutto,
    è il timer continua a girare, questo vuol dire, che in realtà dovremmo effettuare
    un'operazione di distruzione di questo timer quando il componente a sua volta viene eliminato dallo schermo
    è per farlo abbiamo il ciclo di vita OnDestroy ha la sua interfaccia con il metodo ngOnDestroy
    dove possiamo eliminare il timer,
    creiamo una reference al timer:
       timer: number | undefined; oppure timer: ReturnType<typeof setInterval>;
       che lo assegniamo con this.timer a setInterval:

         constructor() {
          console.log('constructor', this.id)

           this.timer = setInterval(() => {
           console.log('timer')
          }, 1000)
        }

        e nel metodo ngOnDestroy:

        ngOnDestroy() {
          clearInterval(this.timer)
        }

        ora vedremo che il timer parte ma appena clik su toggle il timer viene distrutto
        appuna riclicco su toggle e visualizzo il componente il timer riparte
        perchè ngOnInit viene di nuovo invocato ed ecco che viene distrutto il componente.
  */


}
