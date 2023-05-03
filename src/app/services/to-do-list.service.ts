import { Injectable } from '@angular/core';
import { ToDoObj } from '../Models/ToDoObj';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  listToDo: ToDoObj[] = [
    {
      title:"title1",
      description:"desc1",
      isChecked:false,
      id:0
    },
    {
      title:"title2",
      description:"desc2",
      isChecked:false,
      id:1
    },
    {
      title:"title3",
      description:"desc3",
      isChecked:false,
      id:2
    }
  ];
  ToDoHandler$: BehaviorSubject<ToDoObj[]> = new BehaviorSubject<ToDoObj[]>(this.listToDo);
  static NroTodos:number = 0;

  constructor() {}

  getToDos():ToDoObj[]{
    return this.listToDo;
  }

  addToDo(title: string, desc: string){
    const maxId = this.listToDo.reduce(
      (prevVal, currVal) => (prevVal.id>currVal.id)?prevVal:currVal
    ).id;

    this.listToDo.push({
      title: title,
      description: desc,
      isChecked: false,
      id: maxId+1
    });
    
    this.ToDoHandler$.next(this.listToDo);
  }

  updateToDo(toDo: ToDoObj):boolean{
    const idx = this.listToDo.findIndex((curr)=>curr.id);
    if(idx === -1){
      return false;
    }
    this.listToDo[idx] = toDo;
    this.ToDoHandler$.next(this.listToDo);
    return true;
  }
  
  deleteToDo(toDoId: number):boolean{
    const idx = this.listToDo.findIndex((curr)=>curr.id===toDoId);
    if(idx === -1){
      return false;
    }
    this.listToDo.splice(idx,1);
    this.ToDoHandler$.next(this.listToDo);
    return true;
  }

}
