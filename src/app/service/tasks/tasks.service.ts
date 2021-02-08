import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../../model/Task';

@Injectable()
export class TasksService {
  private tasks: Array<Task> = [];
  private doneTasks: Array<Task> = [];
  private tasksObs = new BehaviorSubject<Array<Task>>([]);
  private doneTasksObs = new BehaviorSubject<Array<Task>>([]);

  add(task: Task): void {
    this.tasks.push(task);
    this.tasksObs.next(this.tasks);
  }

  remove(task: Task): void {
    this.tasks = this.tasks.filter(value => value !== task);
    this.tasksObs.next(this.tasks);
  }

  done(task: Task): void {
    task.done = new Date();
    this.doneTasks.push(task);
    this.doneTasksObs.next(this.doneTasks);
    this.remove(task);
    this.tasksObs.next(this.tasks);
  }

  getTasksObs(): Observable<Array<Task>> {
    return this.tasksObs.asObservable();
  }

  getDoneTasksObs(): Observable<Array<Task>> {
    return this.doneTasksObs.asObservable();
  }

}
