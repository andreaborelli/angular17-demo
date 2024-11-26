import { UserProfileComponent } from './shared/components/user-profile.component';
import { Component } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';
import { PhoneComponent } from "./shared/components/phone.component";
import { TimelineComponent } from "./shared/components/timeline.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    PhoneComponent,
    UserProfileComponent,
    CommonModule,
    TimelineComponent
],
  template: `

  <!-- Input Setters -->

    <app-timeline [items]="timeLineList"/>

    <app-timeline [items]="timeLineList" vertical/>
    
        <!-- [items]="timeLineList" passiamo la proprietà items,
         parentesi quadre perchè passiamo un'espressione
         con il valore timeLineList -->

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
}

