import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../model/Task';

@Pipe({
  name: 'sortTasks'
})
export class SortTasksPipe implements PipeTransform {

  transform(value: Array<Task>, args?: any[]): Array<Task> {
    return value.sort((task1, task2) => {
      return task1.name.toUpperCase() > task2.name.toUpperCase() ? 1 : -1;
    });
  }

}
