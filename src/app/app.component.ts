import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  tasks: Array<string> = [];
  doneTasks: Array<string> = [];

  add(task: string): void {
    this.tasks.push(task);
  }

  remove(task: string): void {
    this.tasks = this.tasks.filter(value => value !== task);
  }

  done(task: string): void {
    this.doneTasks.push(task);
    this.remove(task);
  }
}
