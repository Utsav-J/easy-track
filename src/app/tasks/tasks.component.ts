import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy_tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTaskData} from './task/task.model';
import {TasksService} from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  constructor(private tasksService:TasksService){}
  @Input({required: true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingNewTask: boolean = false;

  get selectedUsersTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask(){
    this.isAddingNewTask = true;
  }

  onCloseAddTask(){
    this.isAddingNewTask=false;
  }

}

