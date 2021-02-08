import {Component} from '@angular/core';
import {TasksService} from '../service/tasks/tasks.service';
import {Task} from '../model/Task';

@Component({
  selector: 'app-done-task-list',
  templateUrl: './done-task-list.component.html',
  styleUrls: ['./done-task-list.component.css']
})
export class DoneTaskListComponent {

  doneTasks: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getDoneTasksObs().subscribe(tasks => this.doneTasks = tasks);
  }

}
