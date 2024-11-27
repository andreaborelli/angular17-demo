import { UserProfileComponent } from './shared/components/user-profile.component';
import { Component } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from "./shared/components/phone.component";
import { TimelineComponent } from "./shared/components/timeline.component";
import { AccordionItemComponent } from "./shared/components/accordion-item.component";
import { AlertComponent } from "./shared/components/alert.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    PhoneComponent,
    UserProfileComponent,
    CommonModule,
    TimelineComponent,
    AccordionItemComponent,
    AlertComponent
],
  template: `

  <!-- Alert - inputs   -->

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

    <app-timeline [items]="timeLineList"/>
        <!-- [items]="timeLineList" passiamo la proprietà items,
         parentesi quadre perchè passiamo un'espressione
         con il valore timeLineList -->
    <app-timeline [items]="timeLineList" vertical/>


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
      <br>
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

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  timeLineList = [
    { start: '2014', end: 'description'},
    { start: '2015', end: 'description'},
    { start: '2018', end: 'lorem...' },
    { start: '2022', end: 'bla bla' },
    { start: '2023', end: 'hello' },
  ]

  doSomething() {
    window.alert('Hello');
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

