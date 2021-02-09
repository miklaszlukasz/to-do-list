import {Component} from '@angular/core';
import {TasksService} from '../service/tasks/tasks.service';
import {Task} from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTaskName: string;

  constructor(private tasksService: TasksService) {
  }

  add(): void {
    if (this.newTaskName === ``) {
      alert(`name task can't be blank`);
    } else {
      const newTask: Task = {name: this.newTaskName, created: new Date()};
      this.tasksService.add(newTask);
    }
  }
}
