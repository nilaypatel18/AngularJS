import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() markDoneTodo: EventEmitter<Todo> = new EventEmitter();

  onClickHandle(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  onCheckHandle(todo: Todo) {
    this.markDoneTodo.emit(todo);
  }

  constructor() {}
  ngOnInit(): void {}
}
