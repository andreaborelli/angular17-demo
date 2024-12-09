import { Component } from '@angular/core';
import { AccordionItemComponent } from '../../../shared/components/accordion-item.component';

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [
    AccordionItemComponent
  ],
  template: `
           <app-accordion-item title="one" selected>
        lorem ipsum
      </app-accordion-item>

      <app-accordion-item title="two">
        <em>lorem ipsum</em>
      </app-accordion-item>

      <app-accordion-item title="three">
        <button class="btn btn-info" (click)="doSomething()">Click Me</button>
      </app-accordion-item>
  `,
  styles: ``
})
export default class AccordionDemoComponent {
  
  doSomething() {
    window.alert('hello');
  }

}
