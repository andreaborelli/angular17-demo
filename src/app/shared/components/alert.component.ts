import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `

    <div role="alert"
         class="alert"
         [ngClass]="{
          'alert-info': variant === 'info',
          'alert-success': variant === 'success',
          'alert-error': variant === 'error'
          }"
         >

        @switch (variant) {
          @case ('info') {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          }
          @case('success') {
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          }
          @case('error') {
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          }
          @default {
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          }
        }

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

  @Input() variant: 'info' | 'success' | 'error' | undefined; // union literal types

}
