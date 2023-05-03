import { ToDoObj } from './Models/ToDoObj';
import { ToDoListService } from './services/to-do-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToDoList';
  public todoList:ToDoObj[] = [];
  constructor(
    private todoServ:ToDoListService
  ){}

  ngOnInit(): void {
   this.todoList = this.todoServ.getToDos(); 
  }

}
