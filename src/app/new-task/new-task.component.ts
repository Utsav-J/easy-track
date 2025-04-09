import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../tasks/task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<newTaskData>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";
  
  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.addNewTask.emit(
      {
        title:this.enteredTitle,
        summary:this.enteredSummary,
        dueDate:this.enteredDueDate
      }
    )
    console.log('Form submitted');
  }
}
