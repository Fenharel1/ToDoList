import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit{
  public myForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private todoServ: ToDoListService
  ){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  addToDo(){
    console.log("ADDING " + this.myForm.valid + this.myForm.value['title']);
    if(this.myForm.valid){
      this.todoServ.addToDo(
        this.myForm.value['title'],
        this.myForm.value['description']
      )
    }
  }
}
