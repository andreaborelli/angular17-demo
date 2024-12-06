import { Component, inject, Input } from '@angular/core';
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

  @Input() title = '' // get data.title from route in app.config.ts add withComponentInputBinding()

}
