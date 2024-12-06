import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{ title }}
    </p>
  `,
  styles: ``
})
export default class Demo1Component {

  title = ''; // dichiariamo una proprietà title di tipo stringa

  ActivatedRoute = inject(ActivatedRoute) // iniettiamo il servizio ActivatedRoute, alternativa al costruttore

   constructor() {
    this.title = this.ActivatedRoute.snapshot.data['title']; // accediamo al titolo tramite snapshot
    this.ActivatedRoute.data.subscribe(res => {
      console.log(res['title']);
    });
  }

  // constructor(
  //   private activateRoute: ActivatedRoute
  // ) {
  //   this.title = (this.activateRoute.snapshot.data['title'] ); // accediamo al titolo tramite snapshot
  // }

}
