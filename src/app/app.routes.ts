import { Routes } from '@angular/router';
import { Demo1Component } from './features/demo1/demo1.component';
import { Demo2Component } from './features/demo2/demo2.component';
import { Demo3Component } from './features/demo3/demo3.component';

export const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

  /* pathMatch: definisce la strategia di matching (maccing)
  tra url e il path.
  con pacthMatch: 'prefix' significa che il router verifica solo che la rout comincia
  es. con demo1, demo2 con un determinato path,
  mentre con pathMatch: 'full' significa che deve essere esattamente
  quella stringa vuota path: '',
  */
