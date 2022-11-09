import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { TodosComponent } from './Components/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'hello', component: TodosComponent },
  {
    path: 'todo',
    loadChildren: () =>
      import('./Components/todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
