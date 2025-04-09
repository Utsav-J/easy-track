import { Component, computed, EventEmitter, input, Input, Output} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string;
  @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  @Input({required:true}) avatar! : string;
  // name = input.required<string>();
  @Output() select= new EventEmitter<string>();
  
  get imagePath(){
    return "assets/users/"+this.avatar;
    // imagePath = computed(()=>{return "assets/users/"+ this.avatar()});
  } 

  public onSelectUser(){
    this.select.emit(this.id);
    console.log("Clicked");
  }
}
