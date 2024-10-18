import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: `

     @for (item of items; track $index) {
          <li>{{$index}}</li>
      }

  `,
  styles: ``
})
export class ListComponent {


  items = new Array(50000)

}
