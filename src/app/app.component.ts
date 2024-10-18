import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
// import { DatePipe, DecimalPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule // CommonModule è un modulo che contiene le direttive di base di Angular, come *ngIf, *ngFor, ecc.
  ],
  template: `

    <!-- creare to do list applicando il concetto di IMMUTABILITY,
     ovvero non modificare l'array originale ma creare un nuovo array con i nuovi valori,
     ogni qualvolta che effettuiamo una modifica,
     questo ci permetterà di ottimizzare i render e quindi ridurli al fine di ottenere maggiori prestazioni -->

    <!-- #template reference variable, ci permette di accedere all'elemento del DOM -->

        <div class="centered-page flex flex-col gap-4 items-center">
        <input
          type="text"
          (keydown.enter)="addTodo(input)"
          #input
          class="input input-bordered"
          placeholder="Add new todo"
        >
        <div
          *ngFor="let todo of todos"
          [ngClass]="{
            'line-through': todo.completed
          }"
        >
            <input
              type="checkbox"
              class="checkbox"
              [checked]="todo.completed"
              (change)="toggleTodo(todo.id)"
            >
            {{ todo.title }}

            <button class="btn" (click)="removeTodo(todo.id)">remove</button>
        </div>

        <button class="btn" (click)="saveAll()">Save</button>
      </div>

      <!-- <pre>{{ todos | json }}</pre> -->

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  todos: Todo[] = [
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
  ]

  addTodo(input: HTMLInputElement) { // input è un parametro di tipo HTMLInputElement
    const newTodo: Todo = {
      id: Date.now(), // non avendo un database, possiamo usare Date.now() per avere un id univoco
      title: input.value, // prendiamo il valore dell'input
      completed: false // di default il todo non è completato
    }
    // this.todos.push(newTodo); // aggiungiamo il nuovo todo all'array

    this.todos = [...this.todos, newTodo]; // WITH IMMUTABILITY creiamo un nuovo array con tutti i vecchi todo e aggiungiamo il nuovo todo
    input.value = ''; // per svuotare l'input dopo aver aggiunto un todo
  }

  removeTodo(id:  number) {
    // console.log('remove', id);
    // const index = this.todos.findIndex(todo => todo.id === id); // dobbiamo trovare l'index dell'elemento che vogliamo rimuovere
    //this.todos.splice(index, 1); // rimuoviamo l'elemento dall'array
    this.todos = this.todos.filter(todo => todo.id !== id); // WITH IMMUTABILITY con l'immutabilità creiamo un nuovo array con tutti i todo tranne quello che vogliamo rimuovere eccetto quello che vogliamo rimuovere

    /* this.todos.splice(1, 1); /* si riferisce all'indice 1 che si riferisce al secondo elemento dell'array, visto che partono da zero
                              il secondo parametro si riferisce a quanti elementi da quell' index vogliamo rimuovere */
  }

  toggleTodo(id: number) {
    // const index = this.todos.findIndex(todo => todo.id === id);
    // this.todos[index].completed = !this.todos[index].completed; // invertiamo il valore di completed (true/false) con il punto esclamativo davanti a this.todos[index].completed
    this.todos = this.todos.map(todo => {
     return todo.id === id ? { ...todo, completed: !todo.completed } : todo; // WITH IMMUTABILITY con l'immutabilità creiamo un nuovo array con tutti i todo tranne quello che vogliamo modificare
    })
  }
  //...todo clone l'oggetto todo e poi sovrascrive il valore di completed

  saveAll() {
    console.log(this.todos)
  }

}

// creiamo un interfaccia per definire la struttura di un todo in un file esterno a parte
type Todo = {
  id: number;
  title: string;
  completed: boolean;
}


