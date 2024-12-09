import { Component } from '@angular/core';
import { TimelineComponent } from '../../../shared/components/timeline.component';

@Component({
  selector: 'app-timeline-demo',
  standalone: true,
  imports: [
    TimelineComponent
  ],
  template: `
    <h1>Timeline</h1>

<app-timeline [items]="timeLineList"/>
  <!-- [items]="timeLineList" passiamo la proprietà items,
   parentesi quadre perchè passiamo un'espressione
   con il valore timeLineList -->
<app-timeline [items]="timeLineList" vertical/>
  `,
  styles: ``
})
export default class TimelineDemoComponent {

  timeLineList = [
    { start: '2014', end: 'description'},
    { start: '2015', end: 'description'},
    { start: '2018', end: 'lorem...' },
    { start: '2022', end: 'bla bla' },
    { start: '2023', end: 'hello' },
  ]

}
