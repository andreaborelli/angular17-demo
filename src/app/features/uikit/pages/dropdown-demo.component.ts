import { Component } from '@angular/core';
import { DropdownComponent, DropDownItem } from '../../../shared/components/dropdown.component';

@Component({
  selector: 'app-dropdown-demo',
  standalone: true,
  imports: [
    DropdownComponent
  ],
  template: `
         <app-dropdown
              [items]="list"
              (select)="doSomething($event)"
      >BOTTOM</app-dropdown>

      <app-dropdown [items]="list" placement="right">RIGHT</app-dropdown>
      <app-dropdown [items]="list" placement="top">TOP</app-dropdown>
      <app-dropdown [items]="list" placement="left">LEFT</app-dropdown>
      <app-dropdown [items]="list" placement="left" hover>OVER</app-dropdown>
  `,
  styles: ``
})
export default class DropdownDemoComponent {

  list = [
    { label: 'item 1', value: 1},
    { label: 'item 2', value: 2},
    { label: 'item 3', value: 'something'},
  ]
  doSomething(event: DropDownItem) {
    console.log('do something', event)
  }

}
