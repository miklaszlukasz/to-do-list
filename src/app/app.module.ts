import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DoneTaskListComponent } from './done-task-list/done-task-list.component';
import {TasksService} from './service/tasks/tasks.service';
import { DateDirective } from './directives/date.directive';
import { DisplayTaskPipe } from './pipe/display-task.pipe';
import { SortTasksPipe } from './pipe/sort-tasks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    DoneTaskListComponent,
    DateDirective,
    DisplayTaskPipe,
    SortTasksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
