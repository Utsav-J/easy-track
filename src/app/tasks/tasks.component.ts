import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy_tasks';
import { NewTaskComponent } from "../new-task/new-task.component";
import { newTaskData} from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  tasks = dummyTasks;
  @Input({required: true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingNewTask: boolean = false;

  get selectedUsersTasks(){
    return this.tasks.filter( (task)=> task.userId === this.userId)
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter( (task)=> task.id!== id );
    console.log("Task " + id + " has been completed");
  }

  onStartAddTask(){
    this.isAddingNewTask = true;
  }

  onCancelAddTask(){
    this.isAddingNewTask=false;
  }

  onAddTask(newTask:newTaskData){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title:newTask.title,
      summary:newTask.summary,
      dueDate:newTask.dueDate,
    })
    this.isAddingNewTask=false;
    
  }
}

