import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [],
  template: `

  <div class="collapse bg-base-200">
    <input type="radio" [name]="groupName" [checked]="selected" />
      <div class="collapse-title text-xl font-medium">{{ title }}</div>
        <div class="collapse-content">
          <ng-content></ng-content>
        </div>
  </div>

  `,
  styles: ``
})
export class AccordionItemComponent {

  @Input() title = '';

  @Input() groupName = 'accordion-group'

  @Input( { transform: booleanAttribute } ) selected = false

}
