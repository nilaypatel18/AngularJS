import { Component, Inject, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../utils/components/modal-dialog/modal-dialog.component';
import { AddTodoComponent } from './components';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  availTodos: string | null;
  todos: Todo[];
  exoptions: object = [
    { value: 'true', label: 'Active' },
    { value: 'false', label: 'Inactive' },
  ];
  todoSelected: string = '';
  todoRange: object = {
    start: '2022-09-11',
    end: '2022-09-25',
  };
  todoDate: string = '2022-09-11';
  
  deleteTodoObj(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  addTodoObj(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  markDoneHandle(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '350px';
    dialogConfig.width = '500px';
    dialogConfig.data = {
      component: AddTodoComponent,
      title: 'Add ToDo',
    };

    const dialogRef = this.dialog.open(ModalDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      this.addTodoObj(data);
    });
  }

  onSelect(value: string) {
    this.todoSelected = value;
  }

  dateHandleChange(value: object) {
    console.log(value);
  }

  constructor(public dialog: MatDialog) {
    this.todos = [];
    this.availTodos = localStorage.getItem('TODOS');
    if (this.availTodos == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.availTodos);
    }
  }

  ngOnInit(): void {}
}
