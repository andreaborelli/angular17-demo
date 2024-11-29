import { Component } from '@angular/core';
import { DropDownItem } from "./shared/components/dropdown.component";
import { SharedModule } from './shared/shared.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
],
  template: `

  <!-- Group Components -->

  <div class="mx-6">

    <h1>Timeline</h1>

      <app-timeline [items]="timeLineList"/>
        <!-- [items]="timeLineList" passiamo la proprietà items,
         parentesi quadre perchè passiamo un'espressione
         con il valore timeLineList -->
      <app-timeline [items]="timeLineList" vertical/>

    <h1>Alert</h1>

      <app-alert
        (onCancel)="cancel()"
        (onConfirm)="approve()"
        denyLabel="Cancel"
        acceptLabel="Confirm"
        variant="success"
      >
        this is a message
      </app-alert>

      <br>

      <app-alert
        (onCancel)="doSomethingAlert()"
        (onConfirm)="doSomethingElse()"
        variant="error"
      >
        <div class="flex flex-col gap-5">
          <em>this is messagge alert</em>
          <strong>this is messagge strong</strong>
          <input type="text" class="input input-bordered">
        </div>
      </app-alert>

      <div class="flex flex-col gap-4 m-4" >
        <app-alert>msg</app-alert>
        <app-alert variant="info">msg</app-alert>
        <app-alert variant="success">msg</app-alert>
        <app-alert variant="error">msg</app-alert>
      </div>

    <h1>Dropdown</h1>

      <app-dropdown
          [items]="list"
          (select)="doSomethingItem($event)"
      >BOTTOM</app-dropdown>

      <app-dropdown [items]="list" palcenment='right' >RIGHT</app-dropdown>
      <app-dropdown [items]="list" placement="top">TOP</app-dropdown>
      <app-dropdown [items]="list" placement="left">LEFT</app-dropdown>
      <app-dropdown [items]="list" placement="left" hover>OVER</app-dropdown>

    <h1>Accordion</h1>
      <app-accordion-item title="one" selected>
        lorem ipsum
      </app-accordion-item>

      <app-accordion-item title="two">
        <em>lorem ipsum</em>
      </app-accordion-item>

      <app-accordion-item title="three">
        <button class="btn btn-info" (click)="doSomething()">Click Me</button>
      </app-accordion-item>

      <br>

      <app-accordion-item groupName="another" title="one" selected>
        lorem ipsum
      </app-accordion-item>

      <app-accordion-item groupName="another" title="two">
        <em>lorem ipsum</em>
      </app-accordion-item>

      <app-accordion-item groupName="another" title="three">
       <button class="btn btn-info" (click)="doSomething()">Click Me</button>
      </app-accordion-item>

      <h1>Phone</h1>
          <app-phone
            [src]="url"
            [alt]="alt"
            [showTitle]="true"
            size="xl"
          />

  </div>
  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */
      h1 {
      @apply text-3xl text-center py-2 my-4 border-t border-dashed border-slate-500
    }
  `,
})
export class AppComponent {

  url = 'assets/images/pexels.png'
  alt = 'landscape'

  list = [
    { label: 'Item 1', value: 1 },
    { label: 'Item 2', value: 2 },
    { label: 'Item 3', value: "something"},
  ]

  timeLineList = [
    { start: '2014', end: 'description'},
    { start: '2015', end: 'description'},
    { start: '2018', end: 'lorem...' },
    { start: '2022', end: 'bla bla' },
    { start: '2023', end: 'hello' },
  ]

  doSomethingItem(event: DropDownItem) {
    console.log('do Something', event);
  }

  doSomething() {
    window.alert('hello');
  }

// Alert Component
  approve() {
    window.alert('Approved');
  }

  cancel() {
    window.alert('Denied');
  }

  doSomethingAlert() {
    console.log('doSomethingAlert');
  }

  doSomethingElse() {
    console.log('doSomethingElse');
  }

}

