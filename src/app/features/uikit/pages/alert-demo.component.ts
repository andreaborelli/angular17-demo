import { Component } from '@angular/core';
import { AlertComponent } from '../../../shared/components/alert.component';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [
    AlertComponent
  ],
  template: `
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
  `,
  styles: ``
})
export default class AlertDemoComponent {

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
