import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PhoneComponent } from './components/phone.component';
import { UserProfileComponent } from './components/user-profile.component';
import { TimelineComponent } from './components/timeline.component';
import { AccordionItemComponent } from './components/accordion-item.component';
import { AlertComponent } from './components/alert.component';
import { DropdownComponent } from './components/dropdown.component';

export const COMPONENTS = [
  ListComponent,
  PhoneComponent,
  UserProfileComponent,
  TimelineComponent,
  AccordionItemComponent,
  AlertComponent,
  DropdownComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMPONENTS // spread operator
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
