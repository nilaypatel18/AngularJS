import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoComponent,TodoItemsComponent } from './components';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { TodosRoutingModule } from './todos-routing.module';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  imports: [CommonModule,FormsModule,TodosRoutingModule,UtilsModule],
  declarations: [AddTodoComponent,TodoItemsComponent,TodosComponent],
  exports:[],
  providers: [],
})
export class TodosModule {}
