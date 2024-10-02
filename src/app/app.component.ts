import { Position } from './../../node_modules/@angular-devkit/build-angular/node_modules/postcss/lib/node.d';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <!-- Tailwind CSS -->

  <div class="centered-page sm flex flex-col gap-3">

    <button
      class="btn"
      (mouseover)="show($event)"
      (mouseout)="hide()"
      (mousemove)="move()"
      >Click Me</button>

      <div>{{position?.x}} - {{position?.y}}</div>

      <div
        class="absolute bg-black text-white p-3 rounded-xl pointer-events-none"
        [style.left.px]="position?.x"
        [style.top.px]="position?.y"
        [hidden]="!position"
      >
        TOOLTIP
      </div>

</div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  position: Coords | null = null;

  show(event: MouseEvent) {
    console.log('show', event.clientX, event.clientY);
    this.position = {
      x: event.clientX + 10,
      y: event.clientY + 10
    }
  }

  hide() {
    console.log('hide');
    this.position = null;
  }

  move() {
    console.log('move');
  }


}

export type Coords = {

  x: number;
  y: number;
}
