import { ToDoListService } from 'src/app/services/to-do-list.service';
import { ToDoObj } from './../../Models/ToDoObj';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit{
  @Input() myToDo:ToDoObj = {
      title:"Titulo", 
      description:"Description",
      isChecked:false,
      id:-1
    };

  constructor(
    private todoServ: ToDoListService
  ){}

  ngOnInit(): void {

  }

  editToDo(): void{
    console.log(this.myToDo.id);
  }

  deleteToDo(): void{
    console.log('deleting: ' + this.myToDo.id);
    this.todoServ.deleteToDo(this.myToDo.id);
  }

  checked():void{
    this.myToDo.isChecked = !this.myToDo.isChecked;
  }
}
