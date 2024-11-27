import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  template: `

    <div role="alert" class="alert">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>

      <div><ng-content></ng-content></div>

      <div>
        <button class="btn btn-sm" (click)="onCancel.emit()">{{ denyLabel }}</button>
        <button class="btn btn-sm btn-primary" (click)="onConfirm.emit()">{{ acceptLabel }}</button>
      </div>
    </div>

  `,
  styles: ``
})
export class AlertComponent {

  @Output() onCancel = new EventEmitter();

  @Output() onConfirm = new EventEmitter();

  @Input() denyLabel = 'no'

  @Input() acceptLabel = 'yes'

}
