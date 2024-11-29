import { JsonPipe, NgClass } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';


export interface DropDownItem {
  label: string;
  value: any;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    JsonPipe,
    NgClass
  ],
  template: `

  <div
    class="dropdown"
      [ngClass]="{
        'dropdown-top  dropdown-end': placement === 'top',
        'dropdown-left': placement === 'left',
        'dropdown-right': placement === 'right',
        'dropdown-hover': hover
      }"
    >

    <div tabindex="0" role="button" class="btn m-1">

        <ng-content></ng-content>

    </div>

      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

        @for (item of items; track $index) {
          <li (click)="select.emit(item)"><a>{{ item.label }}</a></li>
        }

      </ul>

  </div>

    <!-- <pre>{{ items | json }}</pre> -->

  `,
  styles: ``
})
export class DropdownComponent {

  @Input() items: DropDownItem[] = [];

  @Input() placement: 'left' | 'right' | 'bottom' | 'top' = 'bottom';

  @Input({transform: booleanAttribute}) hover = false;

  @Output() select = new EventEmitter<DropDownItem>();

}
