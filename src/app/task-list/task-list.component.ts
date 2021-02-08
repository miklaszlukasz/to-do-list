import {Component} from '@angular/core';
import {TasksService} from '../service/tasks/tasks.service';
import {Task} from '../model/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksObs().subscribe(tasks => this.tasks = tasks);
  }


  remove(task: Task): void {
    this.tasksService.remove(task);
  }

  done(task: Task): void {
    this.tasksService.done(task);
  }
}
