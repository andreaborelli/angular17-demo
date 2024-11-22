import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../model/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JsonPipe
  ],
  template: `

  <!-- Ottimizzazione performance con ChangeDetection onPush e Immutability -->

  <!-- un componente viene renderizzato
   la ChangeDetection viene triggherata, quindi il template viene rirenderizzato ogni voltra che succedono
   3 circostanze: eventi, timer e chiamate al server. per verificare abbiamo i DevTool
   ma possiamo inserire con text interpolation una chiamata a una funzione render: render()
   ogni volta che il componente viene renderizzato la funzione render() verrà invocata
   è troveremo un console.log

   render() {
    console.log('render user-profile');
  }

    vedremo 6 render, perchè la ChangeDetection è subito triggherata dall'operazione
    che facciamo es. all'interno dell'input setter quando effettuiamo la chiamata al server
    ma al framework ne servono sempre di più per assicurarsi che la nostra view e tutti i componenti della pagina
    siano sempre aggiornati agli ultimi valori, e su questo non abbiamo controllo a meno che non utilizziamo delle strategie
    di ChangeDetection -->

    <!-- questo sistema è inefficente es. creando un button che non fa nulla, quindi il click trigghera la ChangeDetection,
     es se clicco nel campo di input, rimane in ascolto dell'evento keydown e clicco sul pulsante e scrivere nel campo di input
     il problema principale e che se scriviamo nel campo di input o clicchiamo sul pulsante, viene renderizzato il
     componente user-profile anche se non avrebbe senso renderizzarlo perchè la ChangeDetection quando viene
     triggherata rirenderizza tutti i componenti nella pagina, sapendo che il button e l'inpun non impattono sul componente
     perchè non stiamo cambiandol'id cioè qualcosa che impatta il funzionamento di user-profile, comunque il componente si rirenderizza.
        dovrebbe renderizzarsi solo durante la chiamate effettive. -->

        <!-- per evitare che il componente si rirenderizzano inutilmente
         possiamo adottare una strategia che si chiama ChangeDetectioOnPush, che si può impostare semplicemente
         come proprietà del componente, ora quando scriviamo in input e click sul button
         non renderizza nulla come giusto che sia, cliccando sul button + il componente si renderizza.
         in pratica il componente si renderizza solo quando gli arrivano dell nuove proprietà in input.
          che è l'approccio corretto.

          la nuova ChangeDetectioOnPush non solo richiede che venga passata una nuova proprietà in input per renderizzarsi,
          ma che sia una nuova locazione di memoria, quindi un approccio corretto è usare l'immutanility,
          quindi bisogna creare un nuovo array , cioè una nuova locazione di memoria,
          quindi creaimo un nuovo array che contiene la lista attuale più un numero random 4

          this.list = [...this.list, 4]

          -->

         <p>
      CURRENT ID:
    </p>

    <pre>{{items | json}}</pre>

    {{render()}}
  `,
  styles: ``
})
export class UserProfileComponent {

  @Input() items: any = []

  @Input() set id(val: number | undefined) {
    console.log('val', val)
  }
  user: User | undefined

  render() {
    console.log('render user-profile')
  }

}
