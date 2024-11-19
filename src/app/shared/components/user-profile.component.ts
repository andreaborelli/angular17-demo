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
      CURRENT ID: {{ id }}
    </p>

    <pre>{{ user | json }}</pre>
  `,
  styles: ``
})
export class UserProfileComponent {
  @Input() id: number | undefined;

  user: User | undefined;

  http = inject(HttpClient)

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
    if (changes['id'].firstChange){
      //...qui possiamo fare qualcosa
    }
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${changes['id'].currentValue}`)
    .subscribe( res => {
      // console.log(res);
      this.user = res; // mando a video l'oggetto user con tag <pre> per renderlo più leggibile
    })
    }

  /* ngOnInit trigghera una sola volta pur incrementando il valore:

   inc() {
    if (this.currentId < 10) {
      this.currentId++;
    } else {
      this.currentId = 1;
    }
  }

  se volessimo intercettare le nuove proprietà in input che vengono passate al componente
  dovremmo utilizzare il metodo del ciclo di vita ngOnChanges, che ha una rispettiva interfaccia:

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.id);
    }

    una cosa importante è che il metodo ngOnChanges viene chiamato prima di ngOnInit,
    è importante sopratutto le prime volte si potrebbe pensare che ngOnInit venga chiamato prima di ngOnChanges
    possiamo inizializzare una proprietà in ngOnInit da usare poi in ngOnChanges, ma non è così
    prima viene chiamato ngOnChanges e poi ngOnInit è ogni qualvolta aggiorniamo il valore della proprietà
    es: cliccando sul + trigghera poi ngOnChanges con il nuovo valore
    da notare ngOnChanges trigghera ogni volta che cambia una qualunque proprietà in input non una specifica.
    ogni volta che cambia qualunque proprietà
  */

    /* changes: SimpleChanges
    è una proprietà interessante perchè mi permette di sapere quali proprietà sono cambiate,
    changes è un oggetto che contiene le proprietà in input che sono cambiate in quel momento
    es. changes id possiamo recuperare poi delle proprietà interessanti,
    come currentValue che equivale a this.id il valore corrente che ha in quel momento quella proprietà
    previusValue che è undefined, la prima volta che arriva un valore popolato di ID
    e se è la prima volta che cambia con firstChange: true.  */

}
