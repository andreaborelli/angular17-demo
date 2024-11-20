import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../model/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `

  <!-- proprietà in Input ad un componente, è le abbiamo utilizzato all'interno del template  -->

<!-- alle volte potremmo avere la necessità di
 effettuare un operazione quando una proprietà di Input è disponibile quindi quando passiamo una proprietà in Input,
 immaginiamo di voler fare una chiamata al server quando il componente riceve es. id dell'utente    -->

    <p>
      CURRENT ID: {{ userId }}
    </p>

    <pre>{{ user | json }}</pre>
  `,
  styles: ``
})
export class UserProfileComponent {
  userId: number | undefined;
  @Input() set id(val: number | undefined){
      console.log('val', val);
      this.userId = val;
          this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${val}`)
    .subscribe( res => {
      // console.log(res);
      this.user = res; // mando a video l'oggetto user con tag <pre> per renderlo più leggibile
    })
  }

  user: User | undefined;

  http = inject(HttpClient)

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes)
  //   if (changes['id'].firstChange){
  //     //...qui possiamo fare qualcosa
  //   }
  //   this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${changes['id'].currentValue}`)
  //   .subscribe( res => {
  //     // console.log(res);
  //     this.user = res; // mando a video l'oggetto user con tag <pre> per renderlo più leggibile
  //   })
  //   }

  /* ngOnChanges viene invocato ogni qualvolta una qualunque
  delle proprietà in input viene passata al componente
  è quindi se volessi effettuare un operazione solo quando cambia l'ID
  dovrei aggiungere all'ngOnChanges un if(changes['id'])...
  è quindi se l'id è disponibile all'interno di changes allora posso fare qualcosa
  è con una serie di if o uno switch case potremmo effettuare delle operazioni a seconda
  di quali proprieta in input sono cambiate.
  Oppure posso effettuare delle operazioni solo quando cambia la proprietà ID
  questo può essere fatto anche attraverso l'utilizzo di un input setter
  quindi creaiamo @Input set nome della proprietà che vogliamo esporre all'esterno cioè id,
  riceverà una funzione, nello specifico di tipo number e undefined:
  
      @Input() set id(val: number | undefined){

    console.log('val', val);

        }

    è all'interno possiamo effettuare le operazioni che vogliamo.
    vedremo che al click sul pulsante in console vedremo visualizzato val con il nuovo ID passato.
    spostiamo la chiamata http all'interno del setter sostituiamo il valore dell chaimata changes
    con val che sarebbe il nostro ID passato.
    ovviamente se avessimo altre proprietà ID tipo mappe, contatore ecc.
    potremmo fare di creare altri input setter ed effettuare operazioni diverse a secondo delle proprietà in input
    passate al componente.
    l'unico problema è che id non diventa una proprietà della classe, non possiamo usarla nel template
    perchè non disponibile, quindi dobbiamo creare una proprietà di appoggio:

    userId di tipo number | undefined

 */

}
