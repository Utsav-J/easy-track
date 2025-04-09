import { Component, Input } from '@angular/core';
import {TasksService} from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: false,
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

