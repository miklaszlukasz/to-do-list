import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Array<string> = [];
  @Output()
  taskToRemove = new EventEmitter<string>();
  @Output()
  taskToDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(task: string): void {
    this.taskToRemove.emit(task);
  }

  done(task: string): void {
    this.taskToDone.emit(task);
  }
}
