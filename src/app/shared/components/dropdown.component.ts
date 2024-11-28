import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';


export interface DropDownItem {
  label: string;
  value: any;
}

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `

    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">

        <ng-content></ng-content>

      </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

        @for (item of items; track $index) {
          <li><a>{{ item.label }}</a></li>
        }
        </ul>
    </div>

    <pre>{{ items | json }}</pre>

  `,
  styles: ``
})
export class DropdownComponent {

  @Input() items: DropDownItem[] = [];

}
