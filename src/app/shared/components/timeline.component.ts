import { NgClass } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `

    <ul class="timeline"
        [ngClass]="{ 'timeline-vertical': vertical }"
    >

            @for (item of items; track $index; let first = $first; let last = $last) {

        <li>

            @if (!first) { <hr /> }

      <div class="timeline-start">{{ item.start }}</div>

          <div class="timeline-middle">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd" />
              </svg>

          </div>

    <div class="timeline-end timeline-box">{{ item.end }}</div>

              @if ( !last ) { <hr /> }

        </li>

      }

<!-- proprietà contestuale $index in mancanza di un ID univoco
 sarà diverso per ogni elemento clonato, parte da 0 sul primo elemento clonato, con lenght -1 sull'ultimo
 va usato con moderazione, perchè nel momento in cui avremmo liste dinamiche,
 es. vengono aggiunti ho rimossi elementi all'interno di una lista ci sarà un problema
 l'index sarà variabile tra i vari elementi, es. se viene rimosso un elemento con ID 4,
l'elemento successivo cioè il 5 diventerà 4, cosa che invece non succederà che viene chiamato direttamente l'ID
 perchè l'ID rimane costante attraverso tutti i render.
 comunque il problema sarebbe quando abbbiamo molti elementi da renderizzare  -->

      </ul>
  `,
  styles: ``
})
export class TimelineComponent {

  @Input() items: { start: string, end: string } [] = []

  @Input( { transform: booleanAttribute } ) vertical = false

}
