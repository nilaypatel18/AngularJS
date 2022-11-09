import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/Components/utils/components/modal-dialog/modal-dialog.component';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {

  todo: any;
  title: string;
  description: string;
  active: boolean = false;

  onSubmitHanle() {
    const todo = {
      id: 0,
      title: this.title,
      desc: this.description,
      active: this.active,
    };
    this.dialogRef.close(todo)
  }
  constructor(private dialogRef: MatDialogRef<ModalDialogComponent>) {
  }

  ngOnInit(): void {}
}
