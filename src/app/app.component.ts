import { Component, computed, signal } from '@angular/core';
import { ListComponent } from './shared/list/list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ListComponent,
    CommonModule // contiene le direttive di angular come ngIf e ngFor ecc.
  ],
  template: `

  <!-- Todo List width signals -->

  <!-- utilizziamo i signal e la nuova control flow syntax con if, for e via dicendo -->

  <!-- renderizziamo n elementi sulla base di quanti todo abbiamo.
   track è obbligatorio per miglliorare le performance, quindi inseriamo track è la proprietà id
   che angular userà per capire se un elemento è cambiato o meno tra i vari render in questo caso id -->


    <div class="centered-page sm flex flex-col gap-3">
          <h1 class="page-title">Todo List</h1>

          <!-- campo di input che all'invio invoca addTodo() passando la reference #inputRef al campo di input,
           riceviamo la reference nel metodo (keydown.enter)="addTodo(inputRef)"
           è leggiamo il valore input value:
                      addTodo(input: HTMLInputElement) {
                            console.log(input.value);
                         }
          aggiorniamo il signal con un array nuovo:

          this.todos.update(todos => [...todos, newTodo]);

          che contiene tutti gli elementi attuali contenuti nel signal
          quindi todos, e aggiungiamo il nuovo elemento todo che è generato attraverso un oggetto newTodo:

          const newTodo: Todo = {
            id: Date.now(),
            title: input.value,
            completed: false
          }

          che contiene un id, Date.now() quindi fake perchè non abbiamo un server
          dietro le quinte che ci genera un id univoco il titolo acquisito da

          input.value,

          e la proprietà completed: false, perchè vogliamo che di default in nuovo todo non sia flaggato come completato.
      -->
          <!-- per il toggle: rimaniamo in ascolto dell'evento  (change)="toggleTodo(todo)"
           invocando il metodo toggleTodo() passando il todo di cui vogliamo flaggare la proprietà completed -->

           <div>
              {{totalCompleted()}} completed | {{totalTodos()}} todos
           </div>

           <input
           type="text"
           class="input input-bordered"
           #inputRef
           (keydown.enter)="addTodo(inputRef)"
            placeholder="Add todo"
           >

          <ul>
            @for (todo of todos(); track todo.id) {

              <li class="flex justify-between">

                <div class="flex gap-3">

                <input type="checkbox" [checked]="todo.completed"
                (change)="toggleTodo(todo)"
                >

                <span [ngClass]="{'line-through' : todo.completed}"> <!-- se todo.completed è true aggiungiamo la classe line-through -->
                {{todo.title}}
                </span>

                </div>

                <button (click)="removeTodo(todo)">❌</button>
              </li>

            }

          </ul>

          <!-- <pre>{{ todos() | json }}</pre> -->

    </div>

  `,

  styles: `  /* la regola css non viene inserita in un array con parentesi quadre */

  `,
})
export class AppComponent {

  todos = signal<Todo[]>([ // array di oggetti di tipo Todo
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
  ]);

  totalCompleted = computed(() => this.todos().filter(t => t.completed).length);
  // computer property che ci restituisce il numero di todo completati
  totalTodos = computed(() => this.todos().filter(t => !t.completed).length);
  // computer property che ci restituisce il numero di todo non completati

  // metodo per rimuovere un todo
  addTodo(input: HTMLInputElement){
      const newTodo: Todo = { // creiamo un nuovo todo
        id: Date.now(), //
        title: input.value,
        completed: false
      }
      console.log(input.value);
      this.todos.update(todos => [...todos, newTodo]); // aggiorniamo il signal con un nuovo array
      input.value = ''; // puliamo il campo di input
  }

  // metodo per rimuovere un todo
  removeTodo(todoRemove: Todo){
    this.todos.update(todos => todos.filter(todo => todo.id !== todoRemove.id));
    // update è un metodo di signal che ci permette di aggiornare il valore del signal
    /* todos.filter ci permette di creare una nuova collezione
    dove ci sono tutti gli elementi eccetto quello che vogliamo rimuovere */
}

  // metodo per flaggare un todo come completato o no
  toggleTodo(todoToToggle: Todo){
    this.todos.update(todos => { // invochiamo un nuovo update del signal
      return todos.map( // map è un metodo che ci permette di creare una collezione di pari elementi a quella originale
        t => t.id === todoToToggle.id ? {...t, completed: !t.completed} : t
        /* se id su cui stiamo iterando è quello che vogliamo modificare,
        in questo caso crea un clone del todo e gli modifico la proprietà completed,
        in tutti gli altri casi restituisco l'elemento così com'è */
      )
    })
  }

}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
